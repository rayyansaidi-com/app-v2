# Check if npm and node are installed
if ! command -v npm &> /dev/null || ! command -v node &> /dev/null
then
    echo "Install npm and nodejs at https://nodejs.org/"
    exit
fi
# Check if git is installed
if ! command -v git &> /dev/null
then
    echo "Install git at https://git-scm.com/downloads"
    exit
fi
# Take the code for the app, and put it in the folder you are in
git clone https://github.com/rayyansaidi-com/app.git > /dev/null
cd app
# Install nessary packages
npm i > /dev/null
# Create the dmg, snap, and exe. These are files that download apps. Dmg's are for mac, snap's are for linux, and exe's are for windows
npm run build > /dev/null
cd dist

# Open the dmg, or snap, depending on what the operating system is
if [[ $OSTYPE == "darwin"* ]]
then
    mv *.dmg ../..
    cd ../..
    open "Rayyansaidi Desktop"*.dmg
elif [[ $OSTYPE == "linux"* ]]
then
    sudo snap install *.snap
    cd ../..
else
    echo ":( This is broken. Report an issue on https://github.com/rayyansaidi.com/app/issues"
    cd ../..
    rm -rf app
    exit
fi

# Remove the code
rm -rf app