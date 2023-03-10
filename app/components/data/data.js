/*import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";

  const token = AsyncStorage.getItem('token');
  const [estres,setEstres] = useState([]);
  const getMusicList = async () => {
    try {
        console.log("Recopilando canciones")
        const response = await axios.get(
            'https://alphao2.herokuapp.com/api/alpha/musicOne/lista',
            { headers: { 'accept': 'application/json', 'authorization': await token } }
        );
        //console.log(response.data.data.music_ones);
        setEstres(response.data.data.music_ones)
    } catch (e) {
      console.log(e)
      alert("Error al cargar las canciones");
    }
  }
  
  useEffect(() => {
    getMusicList()
    console.log("CANCIONES CARGADAS: ",estres)
  },[])
  */

export const musiclibrary = [
    {
      id:1,
      url: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
      title: 'Punky',
      artist: 'Benjamin Tissot',
      album: "Bensound's rock",
      genre: 'Rock',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'https://www.bensound.com/bensound-img/punky.jpg', 
      duration: 126, // Duration in seconds
    },
    {
      id:2,
      url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3',
      title: 'Actionable',
      artist: 'Benjamin Tissot',
      album: "Bensound's rock",
      genre: 'Rock',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
      duration: 122, // Duration in seconds
    },
    {
      id:3,
      url: 'https://www.bensound.com/bensound-music/bensound-romantic.mp3',
      title: 'Romantic',
      artist: 'Benjamin Tissot',
      album: "Bensound's Jazz",
      genre: 'Jazz',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'https://www.bensound.com/bensound-img/romantic.jpg', 
      duration: 236, // Duration in seconds
    },
    {
      id:4,
      url: 'https://wvw.mixloaded.com/wp-content/uploads/2022/06/twenty_one_pilots_-_Stressed_Out_MixLoaded.Com.mp3',
      title: 'Stressed Out',
      artist: 'Twenty One Pilots',
      album: "Stressed Out",
      genre: 'Pop',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'https://pbs.twimg.com/media/CaHqSUdWYAEQz_g?format=jpg&name=medium',
      duration: 345, // Duration in seconds
    },
    {
      id:5,
      url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
      title: 'Love',
      artist: 'Benjamin Tissot',
      album: "Bensound's Jazz",
      genre: 'Jazz',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'https://www.bensound.com/bensound-img/love.jpg',
      duration: 335, // Duration in seconds
    },
    {
      id:6,
      url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
      title: 'Dreams',
      artist: 'Benjamin Tissot',
      album: "Bensound's Electronica",
      genre: 'Electronica',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
      duration: 310, // Duration in seconds
    },
    {
      id:7,
      url: 'https://www.bensound.com/bensound-music/bensound-dance.mp3',
      title: 'Love',
      artist: 'Benjamin Tissot',
      album: "Bensound's Electronica",
      genre: 'Electronica',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
      duration: 177, // Duration in seconds
    },
    {
      id:8,
      url: 'https://res.cloudinary.com/dcya5apib/video/upload/v1667514578/canciones/X2Download.com_-_Conchetumare_kirby_128_kbps_bkbnof.mp3',
      title: 'IRA',
      artist: 'Benjamin Tissot',
      album: "Bensound's Electronica",
      genre: 'Electronica',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
      duration: 177, // Duration in seconds
    },
  ];

  export const powers = [
    {
      id:1,
      title: "MUSICAL",
      resume: "Orfeo inaugur?? m??ticamente en Occidente el ???poder musical???.  Mediante la m??sica era capaz de influir en la naturaleza.",
      body:"Orfeo inaugur?? m??ticamente en Occidente el \???poder musical\???. Mediante la m??sica era capaz de influir en la naturaleza.  Bajo el influjo de su m??sica, pod??a hacer florecer los ??rboles en invierno y calmar a los animales salvajes.Actualmente la investigaci??n cient??fica en M??sicoterapia y en Psicolog??a de la M??sica confirma la eficacia de este poder.  Como lo aseveran Tomatis, Campbell, Menuhim e Imberty, la m??sica no s??lo se vincula con las ??reas perceptivas de la sensibilidad y de la innovaci??n, sino que posee poderes de transformaci??n sobre plantas, animales y, en especial, sobre los seres humanos.En Biodanza, la m??sica es rigurosamente seleccionada, con criterios sem??nticos, para estimular y despertar emociones sentimentales, er??ticas, euf??ricas, nost??lgicas, las cuales, al ser danzadas, se transforman en vivencias.",
      image:
        "https://enpositivo.com/wp-content/uploads/2021/09/musica-emociones-taller-musica-y-emociones-museo-pau-casals-composicion-en-positivo-bienestar.jpg",
    },
    {
      id:2,
      title: "DANZA INTEGRADORA",
      resume: "Biodanza posee un repertorio de m??s de 250 ejercicios y danzas que activan los movimientos humanos en forma arm??nica.",
      body:"Biodanza posee un repertorio de m??s de 250 ejercicios y danzas que activan los movimientos humanos en forma arm??nica e integradora;  que estimulan las vivencias de vitalidad, sexualidad, creatividad, afectividad y trascendencia.En Biodanza la m??sica se transforma en movimiento corporal, ???se encarna??? hasta que el danzante entra en vivencia.  De la combinaci??n m??sica-movimiento-vivencia se desencadenan cambios sutiles en el organismo que elevan la calidad de vida, para alcanzar la plenitud y el goce de vivir.",
      image:
        "https://pro2-bar-s3-cdn-cf3.myportfolio.com/6c376f33d9977c0fdb9fe2854fd02432/eb545a76-bfe1-4ca2-a003-25eaba20c19c_rw_1920.jpg?h=3d6cd65b0bf1d1b63c811117dd09e9ba"
    },
    {
      id:3,
      title: "METODOLOG??A VIVENCIAL",
      resume: "Su metodolog??a se orienta a la deflagraci??n de vivencias integradoras.",
      body: "Su metodolog??a se orienta a la deflagraci??n de vivencias integradoras, capaces de superar las disociaciones que induce la cultura.La vivencia es la sensaci??n intensa de estar vivo ???aqu??-ahora??? y posee fuertes componentes cenest??sicos y emocionales.  Las vivencias tienen diferentes matices emocionales, tales como euforia, erotismo, ternura, paz interior, entre otros, que contribuyen a la expresi??n aut??ntica de la identidad. La vivencia es el agente esencial de integraci??n de la unidad funcional: ???habitamos el aqu?? y ahora, en un tiempo c??smico???.",
      image:
        "https://www.iatba.org/wp-content/uploads/2022/03/Danza_transdisciplinaria_IATBA.jpg"
    },
    {
      id:4,
      title: "DEFLAGELADOR DE LA CARICIA",
      resume: "Biodanza es una po??tica del encuentro humano??? (Rolando Toro).",
      body: "\???Biodanza es una po??tica del encuentro humano\??? (Rolando Toro). La conexi??n o contacto con las personas es esencial en todo acto de rehabilitaci??n o curaci??n, no existe crecimiento en solitario. La conexi??n verbal es insuficiente.  Es necesaria la danza en pareja ?? colectiva y el compromiso corporal dentro de un contexto sensible, sutil y en feed-back. La caricia, es contacto y conexi??n porque trabajan en vivencias significativas de amor y comuni??n.",
      image:
        "https://carmenmanceras.files.wordpress.com/2011/01/lluvia-de-caricias-2.jpg"
    },
    {
      id:5,
      title: "TRANCE",
      resume:"Es un estado alterado de conciencia que implica la disminuci??n del ego y regresi??n a lo primordial.",
      body: "Es un estado alterado de conciencia que implica la disminuci??n del ego y regresi??n a lo primordial, a lo originario, en cierto modo a etapas perinatales, a estados iniciales de la existencia.Sus efectos son de renovaci??n biol??gica, porque reedita las condiciones biol??gicas del comienzo del desarrollo y las primeras necesidades de protecci??n, nutrici??n y contacto.Los ejercicios de trance permiten la reparentalizaci??n, es decir ???nacer de nuevo??? dentro de un contexto de amor y cuidado.",
      image:
        "https://www.karmanews.it/wp-content/uploads/2015/01/dol.jpg"
    },
    {
      id:6,
      title: "EXPANSI??N DE LA CONCIENCIA",
      resume:"Es un estado de percepci??n ampliada que restablece el v??nculo primordial con el universo.",
      body: "Es un estado de percepci??n ampliada que restablece el v??nculo primordial con el universo, mediante m??sicas, danzas y ceremonias de encuentro, provocando un sentimiento intenso de unidad ontocosmol??gica y alegr??a trascendente, de plenitud, y frecuentemente de ??xtasis. a trav??s de ejercicios de afectividad y trascendencia.",
      image:
        "https://carmenmanceras.files.wordpress.com/2011/01/danza-fluideza-3-tierra-sepia2.jpg?w=223&h=312&zoom=2"
    },
    {
      id:7,
      title: "GRUPO",
      resume:"Es una matriz de renacimiento que integra a nivel afectivo porque es un campo de interacci??n intenso.",
      body: "Es una matriz de renacimiento que integra a nivel afectivo porque es un campo de interacci??n intenso, en donde la inducci??n rec??proca de vivencias entre los participantes del grupo, tienen el poder de cambiar profundamente actitudes y formas de relacionamiento humano.",
      image:
        "https://carmenmanceras.files.wordpress.com/2011/01/abida-2010-06-02-004.jpg"
    }
  ]

  export const bannerPhotos = [
    {
        username: 'Conferencias: Comunicaci??n en tiempos de caos y trascendencia',
        comment: 'Te esperamos en una sesi??n virtual para reflexionar sobre las tragedias y las buenas experiencias que podemos obtener de los malos momentos', 
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Tt9xnHrtq7G5vUgT54zZyXwyTR2jgankFA&usqp=CAU",                                                                                                                                                                                                                                                                                                                                                                                                               
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    {
        username: 'Formaci??n de facilitadores',
        image: 'https://www.escuelabiodanzalaspalmas.com/wp-content/uploads/2019/07/thumbnail_folleto-Escuela-biodanza-las-palmasCARAA.jpg',
        comment: 'Quieres ser un instructor en el arte de la biodanza, capacitate con nosotros ',
        calificacion:3.50,
      },
      {
        username: 'Taller Biodanza: Comunicaci??n en tiempos de caos y trascendencia',
        comment: 'Te esperamos en taller recreacional para armonitar nuestros sentidos', 
        image:"https://psico.edu.uy/sites/default/files/invitacion_8-8-2012_gr.jpg",                                                                                                                                                                                                                                                                                                                                                                                                               
    },
    {
        username: 'Taller Biodanza: Agradecer lo vivido bendecira lo que llegara',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNMyGHfhRHVzk_2T0JdmI8UXLJAbDCbe5fUwEE=s1280-p-no-v1',
        comment: 'Agenda tu clase y siente la mag??a',
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      
  ]

  export const genders = [
    {
      id:1,
      title: "SOLEDAD",
      video:"https://www.google.com/search?q=biodanza+rolando+toro&rlz=1C1CHBF_esEC1035EC1035&source=lnms&tbm=vid&sa=X&ved=2ahUKEwjhvIO6tf77AhXpSTABHRXTDgsQ_AUoAXoECAEQAw&biw=1366&bih=657&dpr=1#fpstate=ive&vld=cid:26c02a52,vid:GkRYM20Psm4",
      resume: "Orfeo inaugur?? m??ticamente en Occidente el ???poder musical???.  Mediante la m??sica era capaz de influir en la naturaleza.",
      body:"Orfeo inaugur?? m??ticamente en Occidente el \???poder musical\???. Mediante la m??sica era capaz de influir en la naturaleza.  Bajo el influjo de su m??sica, pod??a hacer florecer los ??rboles en invierno y calmar a los animales salvajes.Actualmente la investigaci??n cient??fica en M??sicoterapia y en Psicolog??a de la M??sica confirma la eficacia de este poder.  Como lo aseveran Tomatis, Campbell, Menuhim e Imberty, la m??sica no s??lo se vincula con las ??reas perceptivas de la sensibilidad y de la innovaci??n, sino que posee poderes de transformaci??n sobre plantas, animales y, en especial, sobre los seres humanos.En Biodanza, la m??sica es rigurosamente seleccionada, con criterios sem??nticos, para estimular y despertar emociones sentimentales, er??ticas, euf??ricas, nost??lgicas, las cuales, al ser danzadas, se transforman en vivencias.",
      image:
        "https://enpositivo.com/wp-content/uploads/2021/09/musica-emociones-taller-musica-y-emociones-museo-pau-casals-composicion-en-positivo-bienestar.jpg",
      //estres
      playList:"https://alphao2.herokuapp.com/api/alpha/soledad/1"
    },
    {
      id:2,
      title: "DEPRESION",
      resume: "Biodanza posee un repertorio de m??s de 250 ejercicios y danzas que activan los movimientos humanos en forma arm??nica.",
      body:"Biodanza posee un repertorio de m??s de 250 ejercicios y danzas que activan los movimientos humanos en forma arm??nica e integradora;  que estimulan las vivencias de vitalidad, sexualidad, creatividad, afectividad y trascendencia.En Biodanza la m??sica se transforma en movimiento corporal, ???se encarna??? hasta que el danzante entra en vivencia.  De la combinaci??n m??sica-movimiento-vivencia se desencadenan cambios sutiles en el organismo que elevan la calidad de vida, para alcanzar la plenitud y el goce de vivir.",
      image:
        "https://pro2-bar-s3-cdn-cf3.myportfolio.com/6c376f33d9977c0fdb9fe2854fd02432/eb545a76-bfe1-4ca2-a003-25eaba20c19c_rw_1920.jpg?h=3d6cd65b0bf1d1b63c811117dd09e9ba",
      playList:"https://alphao2.herokuapp.com/api/alpha/depresion/1"
      },
    {
      id:3,
      title: "MIEDO",
      resume: "Su metodolog??a se orienta a la deflagraci??n de vivencias integradoras.",
      body: "Su metodolog??a se orienta a la deflagraci??n de vivencias integradoras, capaces de superar las disociaciones que induce la cultura.La vivencia es la sensaci??n intensa de estar vivo ???aqu??-ahora??? y posee fuertes componentes cenest??sicos y emocionales.  Las vivencias tienen diferentes matices emocionales, tales como euforia, erotismo, ternura, paz interior, entre otros, que contribuyen a la expresi??n aut??ntica de la identidad. La vivencia es el agente esencial de integraci??n de la unidad funcional: ???habitamos el aqu?? y ahora, en un tiempo c??smico???.",
      image:
        "https://www.iatba.org/wp-content/uploads/2022/03/Danza_transdisciplinaria_IATBA.jpg",
      playList:"https://alphao2.herokuapp.com/api/alpha/miedo/1"
    },
    {
      id:4,
      title: "IRA",
      resume: "Biodanza es una po??tica del encuentro humano??? (Rolando Toro).",
      body: "\???Biodanza es una po??tica del encuentro humano\??? (Rolando Toro). La conexi??n o contacto con las personas es esencial en todo acto de rehabilitaci??n o curaci??n, no existe crecimiento en solitario. La conexi??n verbal es insuficiente.  Es necesaria la danza en pareja ?? colectiva y el compromiso corporal dentro de un contexto sensible, sutil y en feed-back. La caricia, es contacto y conexi??n porque trabajan en vivencias significativas de amor y comuni??n.",
      image:
        "https://carmenmanceras.files.wordpress.com/2011/01/lluvia-de-caricias-2.jpg",
      playList:"https://alphao2.herokuapp.com/api/alpha/ira/10"
      
    },
    {
      id:5,
      title: "ANSIEDAD",
      resume:"Es un estado alterado de conciencia que implica la disminuci??n del ego y regresi??n a lo primordial.",
      body: "Es un estado alterado de conciencia que implica la disminuci??n del ego y regresi??n a lo primordial, a lo originario, en cierto modo a etapas perinatales, a estados iniciales de la existencia.Sus efectos son de renovaci??n biol??gica, porque reedita las condiciones biol??gicas del comienzo del desarrollo y las primeras necesidades de protecci??n, nutrici??n y contacto.Los ejercicios de trance permiten la reparentalizaci??n, es decir ???nacer de nuevo??? dentro de un contexto de amor y cuidado.",
      image:
        "https://www.karmanews.it/wp-content/uploads/2015/01/dol.jpg",
      playList:"https://alphao2.herokuapp.com/api/alpha/ansiedad/1"
      
    },
  ]

  //export default musiclibrary