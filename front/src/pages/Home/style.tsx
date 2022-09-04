import styled from 'styled-components/native';

export const Screen = styled.ScrollView`
    padding: 0 5%;
`

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    margin-top: 15%;
`

export const Logo = styled.Image`
    margin-left: 37%;
`

export const ProfilePhoto = styled.Image`
    /* margin-right: 6%; */
`
export const DonationCard = styled.View`
    width: 100%;
    margin-top: 10%;
    margin-right: 6%;
    border-radius: 40px;
    height: 200px;
    margin-bottom: 15%;
`

export const CardHeader = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`

export const CardTitle = styled.Text`
    font-weight: 900;
    font-size: 20%;
    color: #fff;
`
export const CardText = styled.Text`
    margin-top: 5%;
    color: white;
    font-size: 16%;
`

export const CardBar = styled.View`
    margin-top: 5%;
    height: 8%;
    width: 100%;
    background-color: #014659;
    border-radius: 10px;
`

export const CardButton = styled.TouchableOpacity`  
    margin-top: 5%;
    width: 40%; 
    padding: 2%;
    background-color: #09C6AB;
    border-radius: 30px;
    width: 30%;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardBtnText = styled.Text`
    font-size: 20%;
    color: white;
    font-weight: 500;
`

export const Progress = styled.View`
    height: 100%;
    width: 28%;
    border-radius: 10px;
    background-color: #09C6AB;
`

export const NewsSection = styled.View`
    /* margin-bottom: 50%; */
`

export const NewsTitle = styled.Text`
    font-size: 25%;
    color: #068888;
    font-weight: 900;
    margin-bottom: 5%;
`
