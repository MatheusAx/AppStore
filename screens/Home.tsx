import * as React from "react";
import {View,Text} from "react-native";
import {ipserver} from "../config/settings";

export default function Home(){
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
   },[])

   
   
   
   
    return(
        <View>
            <Text>Tela Home</Text>
        </View>
    )
}