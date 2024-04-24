let cookie = "";

export function getCookie(cname: string, jsontype: boolean) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      cookie = c.substring(name.length, c.length);
    }
  }
  try {
    if(jsontype){
      return JSON.parse(cookie)
    }else{
      return cookie
    }
  } catch (e) {
    console.log(e)
  }
}