// ==UserScript==
// @name        evernote-calendar
// @namespace   zdanevich.vitaly@ya.ru
// @match       https://sandbox.evernote.com/Home.action*
// @version     1
// @grant       none
// ==/UserScript==

var wrapper = document.createElement('div');
wrapper.innerHTML = '<div class="GNTMVRYGYB" id="gwt-debug-Sidebar-tagsButton" tabindex="0"><input style="opacity: 0; height: 1px; width: 1px; z-index: -1; overflow: hidden; position: absolute;" role="presentation" tabindex="-1" type="text"><div id="gwt-debug-Sidebar-tagsButton-container" class="GNTMVRYBR"><div class="GNTMVRYPQ"><div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACXUlEQVR42s1YvU7DQAzOwMIDsDEBYwMbrEjwCGRDXDLRCcELsLCyMMMCAwMPgECQRIiAqkr8lIGIDTogIBQBC42oetgX2lKatr4krWLJ0im1z1/tO/+cokiSemSMZEw9q5psF7iQsZinWnoZWazhG/4mZEBW6QnZ0wOZ44V5MOgAV8E4pzDKCh3QxT0SwaIeLcyqFnOpIDqwi3tFBjK8pw3Cv9uCjaoJgKkxemxr+FwblAIztq8NwRnIJwikOZSwN9qgg0H39ghM43zpbldQ6Moonhm3DMFRPNUxfBmbbcpuuni9zkv+h2BcS4MCmx1uk9wBXrvb5pVqhdfoG9b4Tfagj1tspiXPyFztCQjPTvGQt6Od4oGQkUkJTXkKExdVeepkkdveFe9GlnfJJ0GWHDpMnnVAkE0pSrNnK9z9fGgybL5c8GlnSTCu/9Lt5z2fcZapoHKN2kQoB1p+lT+X31o8gUBqMrj+T0/lEp8DXVLSNNmoIoog4R+EgaEAQnr8eqWmgawiqjZBuB2JkJ2Gh+wvkcIGWBS4XYU4gKhEO0esoPz2MykBpJcwZH5qAJmskjZAfqSQUZOdrA5iSd+hjnvtEw7ZLrQctMTYl5CJxEgsHX3wUFA6guKqOykAlJNqPzz/PTIY1JVqP4IGrXNjv3SzEQkU6qCuVIMm2hBbvoVNalZD2+FNfjAY9hVQ2yY/zhgUHUyXMaj/g6JBnV6NIUTf21GaCKYpfGl5bAi5fck8x9gxnmPCHqwwm0p6DGVziT5YtaQGqDf1Jz3RurA3MFrB5irorRpPevXaJEE/gW31vBzI7JIAAAAASUVORK5CYII=" class="GNTMVRYMQ" height="36" width="36"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACXUlEQVR42s1YvU7DQAzOwMIDsDEBYwMbrEjwCGRDXDLRCcELsLCyMMMCAwMPgECQRIiAqkr8lIGIDTogIBQBC42oetgX2lKatr4krWLJ0im1z1/tO/+cokiSemSMZEw9q5psF7iQsZinWnoZWazhG/4mZEBW6QnZ0wOZ44V5MOgAV8E4pzDKCh3QxT0SwaIeLcyqFnOpIDqwi3tFBjK8pw3Cv9uCjaoJgKkxemxr+FwblAIztq8NwRnIJwikOZSwN9qgg0H39ghM43zpbldQ6Moonhm3DMFRPNUxfBmbbcpuuni9zkv+h2BcS4MCmx1uk9wBXrvb5pVqhdfoG9b4Tfagj1tspiXPyFztCQjPTvGQt6Od4oGQkUkJTXkKExdVeepkkdveFe9GlnfJJ0GWHDpMnnVAkE0pSrNnK9z9fGgybL5c8GlnSTCu/9Lt5z2fcZapoHKN2kQoB1p+lT+X31o8gUBqMrj+T0/lEp8DXVLSNNmoIoog4R+EgaEAQnr8eqWmgawiqjZBuB2JkJ2Gh+wvkcIGWBS4XYU4gKhEO0esoPz2MykBpJcwZH5qAJmskjZAfqSQUZOdrA5iSd+hjnvtEw7ZLrQctMTYl5CJxEgsHX3wUFA6guKqOykAlJNqPzz/PTIY1JVqP4IGrXNjv3SzEQkU6qCuVIMm2hBbvoVNalZD2+FNfjAY9hVQ2yY/zhgUHUyXMaj/g6JBnV6NIUTf21GaCKYpfGl5bAi5fck8x9gxnmPCHqwwm0p6DGVziT5YtaQGqDf1Jz3RurA3MFrB5irorRpPevXaJEE/gW31vBzI7JIAAAAASUVORK5CYII=" class="GNTMVRYOQ" height="36" width="36"></div></div><div style="" class="GNTMVRYFR"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAALklEQVR42mNgQAIJCQn1KJyEhMT/KBywADIHKpDUgCIA0YIQRDIUIsiAam1SAwDY1SaFYcC7cwAAAABJRU5ErkJggg==" class="GNTMVRYER" height="8" width="4"><span class="GNTMVRYDR GNTMVRYPD">Tags</span></div></div></div></div>';
var calendarButton = wrapper.firstChild;

function addButton() {
    var referenceNode = document.getElementsByClassName('GNTMVRYJXB')[6];
    referenceNode.parentNode.insertBefore(calendarButton, referenceNode.nextSibling)
} setTimeout(function(){addButton()}, 10000);

document.getElementsByClassName('GNTMVRYGYB')[7] // inserted button
document.getElementsByClassName('GNTMVRYGYB')[7].id = 'button-calendar'

document.getElementById('button-calendar').onclick=function(){toggleCalendar()};
function toggleCalendar() {
    
}

// show calendar onclick
// var calendar = $( ".gwt-DatePicker" ).clone()
// set position: absolute
// .datePickerDay: increase width & height to fullscreen
