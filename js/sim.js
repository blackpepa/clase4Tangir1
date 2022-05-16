
function horoscopo(signoUser){
    let horoscopo = " ";
    switch(signoUser){
        case "aries":
            horoscopo ="comerás buen jamón crudo";
            break;
        case "Aries":
            horoscopo ="comerás buen jamón crudo";
            break;
        case "ARIES":
            horoscopo = "comerás buen jamón crudo";
            break;
        case "tauro":
            horoscopo = "tu inodoro quedará reluciente";
            break;
        case "Tauro":
            horoscopo = "tu inodoro quedará reluciente";
            break;
        case "TAURO":
            horoscopo = "tu inodoro quedará reluciente";
            break;
        case "geminis":
            horoscopo ="llamarás a tu mamá";
            break;
        case "géminis":
            horoscopo = "llamarás a tu mamá";
            break;
        case "Geminis":
            horoscopo ="llamarás a tu mamá";
            break;
        case "Géminis":
            horoscopo= "llamarás a tu mamá";
            break;
        case "GEMINIS":
            horoscopo= "llamarás a tu mamá";
            break;
        case "GÉMINIS":
            horoscopo= "llamarás a tu mamá";
            break;
        case "cancer":
            horoscopo = "club día te dará un descuento en papas fritas";
            break;
        case "cáncer":
            horoscopo= "club día te dará un descuento en papas fritas";
            break;
        case "Cancer":
            horoscopo = "club día te dará un descuento en papas fritas";
            break;
        case "Cáncer":
            horoscopo ="club día te dará un descuento en papas fritas";
            break;
        case "CANCER":
            horoscopo = "club día te dará un descuento en papas fritas";
            break;
        case "CÁNCER":
            horoscopo ="club día te dará un descuento en papas fritas";
            break;
        case "leo":
            horoscopo = "tomarás sol al mediodía";
            break;
        case "Leo":
            horoscopo = "tomarás sol al mediodía";
            break;
        case "LEO":
            horoscopo = "tomarás sol al mediodía";
            break;
        case "virgo":
            horoscopo = "te quedarás sin papel higiénico";
            break;
        case "Virgo":
            horoscopo = "te quedarás sin papel higiénico";
            break;
        case "VIRGO":
            horoscopo= "te quedarás sin papel higiénico";
            break;
        case "libra":
            horoscopo = "ese jean te volverá a entrar";
            break;
        case "Libra":
            horoscopo = "ese jean te volverá a entrar";
            break;
        case "LIBRA":
            horoscopo = "ese jean te volverá a entrar";
            break;
        case "escorpio":
            horoscopo ="cantarás todo el día una canción de Arjona";
            break;
        case "Escorpio":
            horoscopo="cantarás todo el día una canción de Arjona";
            break;
        case "ESCORPIO":
            horoscopo="cantarás todo el día una canción de Arjona";
            break;
        case "sagitario":
            horoscopo= "tendrás que correr el bondi";
            break;
        case "Sagitario":
            horoscopo = "tendrás que correr el bondi";
            break;
        case "SAGITARIO":
            horoscopo="tendrás que correr el bondi";
            break;
        case "capricornio":
            horoscopo="pisarás caca de perro";
            break;
        case "Capricornio":
            horoscopo= "pisarás caca de perro";
            break;
        case "CAPRICORNIO":
            horoscopo= "pisarás caca de perro";
            break;
        case "acuario":
            horoscopo="te caerá mal ese sushi";
            break;
        case "Acuario":
            horoscopo="te caerá mal ese sushi";
            break;
        case "ACUARIO":
            horoscopo="te caerá mal ese sushi";
            break; 
        case "piscis":
            horoscopo="seguirás igual de hippie";
            break;
        case "Piscis":
            horoscopo="seguirás igual de hippie";
            break;
        case "PISCIS":
            horoscopo="seguirás igual de hippie";
            break;
    
        default:
            horoscopo ="pruebes con un signo del zodiaco";
    
    }
    return horoscopo;
    }

let signoUser = prompt ("Ingresá tu signo");
let unHoroscopo = "Madame LeFortune dice que " + horoscopo(signoUser);
alert (unHoroscopo);

/*
while(signoUser !== signoVacio){
    signoUser = prompt("Ingresá un signo astrológico válido");
}
*/