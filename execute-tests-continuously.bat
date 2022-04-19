@echo off

:reset

node newman.js 1_authorization
node newman.js 2_new_counterparty
node newman.js 3_editing_counterparty_overviewg
node newman.js 4_import

echo.
echo Enter 1 to rerun, something else to exit

set /p verification=

if %verification%==1 (
    goto :reset
)