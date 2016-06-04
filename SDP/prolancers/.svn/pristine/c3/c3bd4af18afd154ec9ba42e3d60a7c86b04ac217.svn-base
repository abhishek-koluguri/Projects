set path=C:\programs\ruby\ruby220\bin;%PATH%
cd Agile

call bundle install
if ERRORLEVEL 1 goto reportError

call npm install

call set RAILS_ENV=test
if ERRORLEVEL 1 goto reportError

call rake db:drop

call rake db:create

call rake db:migrate
if ERRORLEVEL 1 goto reportError

call rake test
if ERRORLEVEL 1 goto reportError

rem call node node_modules/karma/bin/karma start --reporters clear-screen,dots,coverage --single-run
rem if ERRORLEVEL 1 goto reportError

:reportError
exit %ERRORLEVEL%
