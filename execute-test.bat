@echo off
Color 0A

:reset

:: Ввод данных:

echo ---------------------------

set /p test_name="Enter test name or 3 to exit: "

if %test_name%==3 (
    exit
)

echo Please check carefully that all details are correct

:: "Идентификация" данных:

echo Test name: "%test_name%"
echo Enter 1 to proceed, 2 to reset, something else to exit

set /p verification=

if %verification%==2 (
    goto :reset
)

if %verification%==1 (
    node newman.js %test_name%
    goto :reset
) else (
    exit
)