<a id="about"></a>

My name is Anoki Youssou Fauzan Tanuel, also know as Anokidev, I am a 14 years old kid who is learning how to code. Currently, I am focusing to the world of frontend web development (Javascript, Typescript, CSS, SCSS, React, Svelte, Next.Js, Angular, etc). However, I like to expand my focus to datascience (R, Anaconda, Python, Panda, NumPy, etc), system administration (sysadmin, Bash, PowerShell, shell script, Linux, etc), and low level programming (C, C++, assembly, microcontroller, Arduino, etc). Currently I live in Indonesia, I also love Mathematics, science, computers, and other STEM-related topics and stuff.

# Table of Contents <a id="table-of-contents"></a>

1. [About](#about)
2. [Table of Contents](#table-of-contents)
3. [History](#history)
    - [Virtual Machine (VM)](#virtual-machine)
    - [Batchfile](#batchfile)
    - [HTML, CSS, and Javascript](#html,-css,-and-javascript)
    - [Javascript Frameworks and Python](#javascript-frameworks-and-python)
    - [Shell Scripting and Ricing Linux](#shell-scripting-and-ricing-linux)

# History <a id="history"></a>

I am going to explain my coding journey, from 2017 -- until now.

## Virtual Machine <a id="virtual-machine"></a>

I already touched computers since I was a kind, I also fell in love with computers since 2017, since that, I am spending way too many hours installing old operating systems in a bunch of VMs. In 2020, I decided to continue the VM Project, but this time, the catch is that I am going to focus to Linux and UNIX operating systems. I ended up learning a lot more stuff, such as bootloader, kernel, grep, Bash, Pacman, Apt, desktop enviroments, X11, window managers, etc.

## Batchfile <a id="batchfile"></a>

After that, I started to learn Batchfile, the main scripting language that is used by a popular terminal emulator that is called Windows Command Prompt (cmd.exe). Personally, I don't really like Batchfile, because it's features are quirky. Hell, even the official manual for the set command is really long. Btw, this is a block of code that I wrote in Batchfile way back in 2020:

```bat
TITLE Advanced Calculator
@ECHO OFF
CLS
ECHO -by Ratpipe

:OPT
color 1f
Cls
ECHO --------------------------------------------------------------------------------
ECHO[
ECHO                                CMD CALCULATOR V1.0
ECHO                                    BY RATPIPE
ECHO[
ECHO --------------------------------------------------------------------------------
ECHO[
ECHO[
ECHO    + = Sum
ECHO[
ECHO    - = Sub
ECHO[
ECHO    / = Division
ECHO[
ECHO    * = Multiply
ECHO[
ECHO    ~ = Exit
ECHO[
ECHO[
ECHO --------------------------------------------------------------------------------
ECHO[
SET/P ch=" Enter Symbol "
IF %ch% EQU + GOTO:SUM
IF %ch% EQU - GOTO:SUB
IF %ch% EQU / GOTO:DIV
IF %ch% EQU * GOTO:MUL
IF %ch% EQU ~ GOTO:EXIT
IF %ch% GTR . GOTO:ERROR

:SUM
CLS
ECHO -------------------------------------------------------------------------------
ECHO[
ECHO                                       SUM
ECHO[
ECHO -------------------------------------------------------------------------------
ECHO[
set /p A=" Enter First Number = "
ECHO[
set /p B=" Enter Second Number = "
SET /A C=A+B
ECHO[
ECHO -------------------------------------------------------------------------------
ECHO.
ECHO %A%+%B%=%C%
ECHO.
PAUSE
GOTO:OPT

:SUB
CLS
ECHO -------------------------------------------------------------------------------
ECHO[
ECHO                                   SUBTRACTION
ECHO[
ECHO -------------------------------------------------------------------------------
ECHO[
set /p A=" Enter First Number = "
ECHO[
set /p B=" Enter Second Number = "
SET /A C=A-B
ECHO[
ECHO -------------------------------------------------------------------------------
ECHO.
ECHO %A%-%B%=%C%
ECHO.
PAUSE
GOTO:OPT

:MUL
CLS
ECHO -------------------------------------------------------------------------------
ECHO[
ECHO                                  MULTIPICATION
ECHO[
ECHO -------------------------------------------------------------------------------
ECHO[
set /p A=" Enter First Number = "
ECHO[
set /p B=" Enter Second Number = "
SET /A C=A*B
ECHO[
ECHO -------------------------------------------------------------------------------
ECHO.
ECHO %A%*%B%=%C%
ECHO.
PAUSE
GOTO:OPT

:DIV
CLS
ECHO -------------------------------------------------------------------------------
ECHO[
ECHO                                    DIVISION
ECHO[
ECHO -------------------------------------------------------------------------------
ECHO[
set /p A=" Enter First Number = "
ECHO[
set /p B=" Enter Second Number = "
SET /A C=A/B
ECHO[
ECHO -------------------------------------------------------------------------------
ECHO.
ECHO %A%/%B%=%C%
ECHO.
PAUSE
GOTO:OPT

:ERROR
CLS
ECHO -------------------------------------------------------------------------------
ECHO[
ECHO                                     ERROR
ECHO[
ECHO -------------------------------------------------------------------------------
ECHO.
ECHO Wrong Options!
ECHO.
ECHO (+) For Add Numbers
ECHO (-) For Substract number
ECHO (/) for Division
ECHO (*) for Multiply.
ECHO.
PAUSE
GOTO:OPT

:EXIT
EXIT
```

## HTML, CSS, and Javascript <a id="html,-css,-and-javascript"></a>

In the middle of year 2020, I progressed further to the quirky world of web development. I learned HTML, followed by Javascript, and then CSS. I haven't learned several CSS libraries such as Tailwind, LESS, nor PostCSS. But I already learn SCSS (SASS) and I already touched Bootstrap CSS. I also learned some Javascript API such as Canvas API. 

## Javascript Frameworks and Python <a id="javascript-frameworks-and-python"></a>

In the end of 2022 I learned frameworks such as Electron. I also learned Git and NPM (Node Package Manager). And then I learned several different frontend and backend technologies such as Angular, Typescript, React, Next.JS, Svelte, Node.js, and a whole number of other stuffs. I also switched to Linux (Elementary), then learned Python.

## Shell Scripting and Ricing Linux <a id="shell-scripting-and-ricing-linux"></a>

In the year of 2021, I was introduced to a Reddit community called [r/unixporn](https://www.reddit.com/r/unixporn). It is a "geeks-only" Reddit community composed of thousands Linux elitist that loves decorating or ricing their Linux's powered computers. I switched to Manjaro due to the fact that I don't need to upgrade my entire system everytime an update was released, riced my GNOME, then switched to XFCE4, then to i3wm. This is also the phase when I started to editor-hop, (From VS Code to PyCharm to VS Code to Neovim to VS Code to Neovim to VS Code to Emacs to VS Code). I also learn another shell, PowerShell.

<br>

<img alt="xfce4-rice-1" src="images/about/1.png"/>

<br>

<div style="display: flex; justify-content: center;" align="center">
    <i>Manjaro XFCE4 Rice</i>
</div>

<br>


<img alt="xfce4-rice-2" src="images/about/2.png"/>


<br>

<div style="display: flex; justify-content: center;" align="center">
    <i>Another Manjaro XFCE4 Rice</i>
</div>