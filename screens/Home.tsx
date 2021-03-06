import * as React from "react";
import {View,Text,Image} from "react-native";
import {ipserver} from "../config/settings";
import {styles} from "../css/Styles";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Detalhes from "./Detalhes";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();
export default function Home(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="ListarProdutos" component={ListarProdutos}/>
                <Stack.Screen name="Detalhes" component={Detalhes}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function ListarProdutos({navigation}){
//Vamos construir uma estrutura para carregar
//os dados sobre os produtos que virão do banco
//de dados. Iremos criar um array(Lista) com o
//uso de uma constante chamada produtos   
   const[produtos,setProdutos] = React.useState([]);

   // o comando recat.effect é executado uma vez
   // ao abrir a tela home. Ele será responsável
   //por carregar os dados do servidor
   React.useEffect(()=>{
        fetch(`${ipserver}produto/listar`)
        .then((response)=>response.json())
        .then((resultado)=>setProdutos(resultado.rs))
        .catch((erro)=>console.error(`Erro ao tentar carregar os produtos->${erro}`));
   })

   
    return(
        <View style={styles.container}>
           <ScrollView horizontal= {false}>
                <View style={styles.display}>
            {
                produtos.map((item,ix)=>(
                    <TouchableOpacity  key={item._id} onPress={()=>{
                        navigation.navigate("Detalhes",{idproduto:`${item._id}`})
                    }} style={styles.acesso}>
                    
                    <View style={styles.cxproduto}>
                        
                        <Image source={{uri:`${item.foto}`}} style={styles.foto}/>
                        
                        <Text style={styles.nomeproduto}> {item.nomeproduto}</Text>
                        
                        <Text style={styles.preco}> {item.preco}</Text>
                    
                    </View>
                    </TouchableOpacity>
                ))
            }
                </View>
                </ScrollView>
        </View>
    )}