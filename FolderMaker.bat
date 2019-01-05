:: todo: option to navigate to correct folder

@echo off
title Folder Maker

echo ------------------------
echo Welcome to Folder Maker
echo ------------------------
echo Enter Corresponding Number then Enter
echo     1. Numbered folders
echo     2. Named folders
echo     3. Exit

set /P option=
if /I "%option%" EQU "1" goto :numberedfolders
if /I "%option%" EQU "2" goto :namedfolders
if /I "%option%" EQU "3" exit
exit

:numberedfolders
echo How many folders?
set /P num=
FOR /L %%a IN (1,1,%num%) DO (
    md "%%a"
)
pause
exit

:namedfolders
echo Enter folder names seperated by commas
set /P names=
for %%a in ("%names:,=" "%") DO (
    md "%%a"
)
pause
exit
