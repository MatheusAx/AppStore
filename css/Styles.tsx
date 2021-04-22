import {StyleSheet} from 'react-native';
import { Directions } from 'react-native-gesture-handler';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    foto:{
        width:"100%",
        height:250,
        resizeMode:'cover',
    },
    nomeproduto:{
        fontSize:15,
        fontWeight:'bold',
    },
    preco:{
        fontSize:18,
        color:'#070',
        
    },
    cxproduto:{
        backgroundColor:'white',
        width:195,
        margin:2,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowRadius:10,
        shadowOffset:{width:10,height:10},
        elevation: 5,
        padding:4,
    },
    display:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    acesso:{
        
        width:195,
        margin:6,
    },
    fotodetalhe:{
        width:400,
        height:300,
    },
    btncarrinho:{
        backgroundColor:'red',
        width:300,
        marginLeft:60,
        marginRight:60,
        padding:10,
        marginTop:50,
        borderRadius:20,
    },
    txtcarrinho:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
    }
})