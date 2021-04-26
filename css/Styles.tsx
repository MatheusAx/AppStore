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
    //fotodetalhe:{
    //    width:100,
    //    height:50,
    //},
    cxproduto1:{
        backgroundColor:'white',
        width:"48%",
        margin:2,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowRadius:10,
        shadowOffset:{width:10,height:10},
        elevation: 5,
        padding:4,
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
    },
    input:{
        width:'100%',
        padding:10,
        marginBottom:5,
        borderBottomColor:'silver',
        borderBottomWidth:1,
        marginLeft: 'auto',
        marginRight: 'auto' 
    },
    btncadastro:{
        backgroundColor:'#0f0',
        width:100,
        height:100,
        borderRadius:50,
        marginRight:'auto',
        marginLeft: 'auto',
        marginTop:50,
        paddingTop:40,
        shadowColor:'black',
        textShadowOffset:{width:5, height:5},
        shadowOpacity:0.9,
        shadowRadius:5,
        elevation:10
    },
    btncarrinho1:{
        alignContent:'center',
        backgroundColor:'red',
        width:150,
        marginLeft:20,
        padding:10,
        marginTop:50,
        borderRadius:20,
    }

})
