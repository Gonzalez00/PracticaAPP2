import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Testimonio from './Componente/Testimonio';

export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.imagen} source={require('./Imagenes/Logo.png')}></Image>
      <Text style={styles.tituloText}>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</Text>
      
      <ScrollView style={styles.scrollView}>
        <Testimonio
          nombre='Shawn Wang '
          pais='Singapur'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          foto={require('./Imagenes/Imagen1.png')}
          testimonio='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
        ></Testimonio>

        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          foto={require('./Imagenes/Imagen2.png')}
          testimonio='"FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."'
        ></Testimonio>
        
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          foto={require('./Imagenes/Imagen3.png')}
          testimonio='"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
        ></Testimonio>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagen: {
    height: 80,
    width: '100%',
    justifyContent:'center',
  },
  tituloText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    width: '100%'
  }
});