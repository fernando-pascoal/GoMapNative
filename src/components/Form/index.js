import React, { Component } from "react";

import {
    Modal,
    ModalView,
    FormView,
    FormTitle,
    TextInput,
    ButtonContainer,
    SaveButton,
    CancelButton,
    Text,
    ErrorText,
    ActivityIndicator
} from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "~/store/ducks/users";

class Form extends Component {
    initialState = {
        loading: false,
        error: false
    };

    state = { ...this.initialState, username: "" };

    handlerPressCancel = () => {
        this.props.changeFormState();
    };

    handlerPressSave = async () => {
        const { coordinates, getUserRequest } = this.props;
        const { username } = this.state;
        getUserRequest(username, coordinates);
        this.setState({ username: "" });
    };

    render() {
        const { formOpen, loading, error } = this.props;
        const { username } = this.state;
        return (
            <Modal visible={formOpen}>
                <ModalView>
                    <FormView>
                        <FormTitle>Adicionar novo local</FormTitle>
                        {!!error && <ErrorText>{error}</ErrorText>}
                        <TextInput
                            value={username}
                            onChangeText={username =>
                                this.setState({ username })
                            }
                        />
                        <ButtonContainer>
                            <CancelButton onPress={this.handlerPressCancel}>
                                <Text>Cancelar</Text>
                            </CancelButton>
                            <SaveButton onPress={this.handlerPressSave}>
                                {loading ? (
                                    <ActivityIndicator />
                                ) : (
                                    <Text>Salvar</Text>
                                )}
                            </SaveButton>
                        </ButtonContainer>
                    </FormView>
                </ModalView>
            </Modal>
        );
    }
}

mapStateToProps = state => ({
    formOpen: state.users.formOpen,
    error: state.users.error,
    loading: state.users.loading,
    coordinates: state.users.coordinates
});

mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
