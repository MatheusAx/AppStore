import * as React from "react";
import {View,Text} from "react-native";
import {ipserver} from "../config/settings";
import {Image,TouchableOpacity} from "react-native";
import {styles} from "../css/Styles";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
export default function Carrinho(){
//Vamos construir uma estrutura para carregar
//os dados sobre os produtos que virão do banco
//de dados. Iremos criar um array(Lista) com o
//uso de uma constante chamada produtos   
const[produtos,setProdutos] = React.useState([]);

// o comando recat.effect é executado uma vez
// ao abrir a tela home. Ele será responsável
//por carregar os dados do servidor
React.useEffect(()=>{
     fetch(`${ipserver}carrinho/itens`)
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
                
                 <View key={item._id} style={styles.cxproduto}>
                     
                     <Image source={{uri:`${item.foto}`}} style={styles.foto}/>
                     
                     <Text style={styles.nomeproduto}> {item.nomeproduto}</Text>
                     
                     <Text style={styles.preco}> {item.preco}</Text>

                     <TouchableOpacity onPress={()=>{
                         removerDoCarrinho(item._id);
                     }} style={styles.btncarrinho}>

                         <Text style={styles.txtcarrinho}>
                             Remover <AntDesign name="delete" size={20} color="white"/>
                         </Text>
                         
                         </TouchableOpacity>

                 </View>
                 
             ))
         }
             </View>
             </ScrollView>
     </View>
 );
}

function removerDoCarrinho(id){
    fetch(`${ipserver}carrinho/removeritem/${id}`,{
        method:"DELETE",
        headers:{
            accept:'application/json',
            'content-type':'application/json'
        }
    })
    .then(()=>alert("Item removido"))
    .catch((error)=>alert(`Erro ao tentar remover o item ${error}`));
    }
