import {Text, View} from 'react-native';
import {Link} from 'expo-router';

<Link href="/saludo"> Ir a saludo </Link>
export default function Saludo(){
    return(
        <View style=
            {{
            backgroundColor:'black',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            }}>

            <Text style=
                {{
                color:'white',
                }}>

                Hola desde otra pantalla
            </Text>
        </View>
    );
}