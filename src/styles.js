import styled from "styled-components/native";

export const ViewContainer = styled.View`
    flex: 1;
`;

export const LocationContainer = styled.View`
    width: 50;
    height: 50;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 50;
`;

export const LocationAvatar = styled.Image`
    width: 45;
    height: 45;
    border-radius: 50;
`;

export const Modal = styled.Modal.attrs({
    transparent: true,
    animationType: "slide"
})`
    flex: 1;
    align-content: center;
`;

export const FormView = styled.View`
    background-color: rgba(255, 255, 255, 0.5);
    flex-direction: column;
    padding: 10px;
    margin: 20px;
`;

export const FormTitle = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #000;
    padding-bottom: 20px;
    text-align: center;
`;

export const TextInput = styled.TextInput.attrs({
    autoCapitalize: "none",
    autoCorrect: false,
    autoFocus: true,
    placeholder: "Usuário do Github"
})`
    font-size: 20px;
    width: 100%;
    height: 50;
    border-radius: 3px;
    background-color: #fff;
    padding-left: 20px;
    border: 1px;
    border-color: rgba(0, 0, 0, 0.2);
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0px;
`;

export const CancelButton = styled.TouchableOpacity`
    flex: 1;
    height: 50;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

export const SaveButton = styled.TouchableOpacity`
    flex: 1;
    height: 50;
    border-radius: 3px;
    background-color: rgba(108, 194, 91, 0.5);
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const ErrorText = styled.Text`
    color: #ff9999;
    font-size: 20px;
`;

export const ActivityIndicator = styled.ActivityIndicator`
    font-size: 20px;
    color: #000;
`;
