@echo off
echo 🚀 Construction de l'extension GLSL Hover Documentation
echo.

REM Vérifier que Node.js est installé
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js n'est pas installé. Veuillez l'installer depuis https://nodejs.org/
    exit /b 1
)

echo ✅ Node.js détecté
node --version

REM Vérifier que npm est installé
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm n'est pas installé.
    exit /b 1
)

echo ✅ npm détecté
npm --version
echo.

REM Installer vsce si nécessaire
where vsce >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 📦 Installation de vsce...
    call npm install -g @vscode/vsce
    echo.
)

REM Créer le package sans exécuter prepublish
echo 📦 Création du package VSIX...
call vsce package --no-dependencies

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Extension créée avec succès!
    echo.
    echo 📋 Pour installer l'extension:
    echo    1. Ouvrez VSCode
    echo    2. Allez dans Extensions (Ctrl+Shift+X^)
    echo    3. Cliquez sur ... → 'Installer depuis VSIX...'
    echo    4. Sélectionnez le fichier .vsix créé
    echo.
    dir *.vsix
) else (
    echo.
    echo ❌ Erreur lors de la création du package
    exit /b 1
)

pause
