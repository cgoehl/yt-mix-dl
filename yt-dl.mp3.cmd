set "BACKEND=yt-dlp.exe"
set "TARGET_PATH=%userprofile%\Desktop\ytdl\%~n1"
@REM set "TARGET_PATH=%userprofile%\Desktop\ytdl\%1:~0,-4%"

"%BACKEND%" -x --audio-format mp3 -a %1 -o "%TARGET_PATH%\%%(title)s.%%(ext)s"
start "" "%TARGET_PATH%"