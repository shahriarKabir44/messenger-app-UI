function getel(x) {
    return document.getElementById(x)
}

var menubarStatus = 0;
var sidebaStatus = 0
getel('menubar').onclick = () => {
    if (!menubarStatus) {
        getel('sidebar').style.maxWidth = '95vw'
        getel('sidepage').style.display = 'none';
        getel('sidebar').style.width = '100%';
        getel('sidebarHeader').style.display = 'block';
        getel('body').style.display = 'none';
    }
    else {
        getel('sidebar').style.maxWidth = '0';
        getel('sidebarHeader').style.display = 'none';

        if (sidebaStatus) getel('sidepage').style.display = 'block';
        else getel('body').style.display = 'block';
    }
    menubarStatus ^= 1;
}

getel('messagePanel').onclick = () => {
    getel('body').style.display = 'block';
    getel('sidepage').style.display = 'none';
    getel('sidebar').style.maxWidth = '0';
    sidebaStatus ^= 1
}

getel('friendspanel').onclick = () => {
    getel('body').style.display = 'none';
    getel('sidebar').style.maxWidth = '0';
    getel('sidepage').style.display = 'block';
    sidebaStatus ^= 1

}