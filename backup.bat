@echo off

goto start
--------------------------------------
REM Параметры команды robocopy

Параметр -e сообщает команде, что необходимо скопировать все подпапки (включая пустые подпапки).
Эта команда автоматически копирует скрытые и системные файлы. Она автоматически создает новые папки, если их нет в указанном месте назначения.

Параметр -mir отлично подходит для создания резервных копий. В этом случае команда скопирует все содержимое из источника в указанное место назначение. При этом любой контент, хранящийся в месте назначения,
но которого нет в источнике, будет удален. Это гарантирует, что резервная копия будет иметь только последние версии файлов.

Параметр -z перезапуск копирования, если что-то произошло в процессе предыдущего копирования
--------------------------------------
:start



set /p info=<backup\info.txt
set /a tag_integer=%info:~8,1%
set /a tag_real=%info:~10,1%
set version_string=%info:~0,7%

if %tag_real%==20 (
    set /a tag_integer+=1
    set /a tag_real=0
) else (
    set /a tag_real+=1
)

mkdir "backup\API_tests %version_string% %tag_integer%.%tag_real%"

REM UTF-8
chcp 65001

robocopy external_files "backup\API_tests %version_string% %tag_integer%.%tag_real%\external_files" /e /z /mir /log+:backup\backup_logs.txt
robocopy postman_tests  "backup\API_tests %version_string% %tag_integer%.%tag_real%\postman_tests" /e /z /mir /log+:backup\backup_logs.txt
robocopy server         "backup\API_tests %version_string% %tag_integer%.%tag_real%\server"       /e /z /mir /log+:backup\backup_logs.txt

REM DOS
chcp 866

cd.>backup\info.txt
echo %version_string% %tag_integer%.%tag_real% >>backup\info.txt