import React, { Component } from "react";
import MapboxGL from "@mapbox/react-native-mapbox-gl";
import RNLocation, {
    isAuthorized,
    getAuthorization
} from "~/services/geolocation";

import {
    LocationContainer,
    LocationAvatar,
    LocationBlack,
    MapContainer,
    ButtonLocation
} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "~/store/ducks/users";

class Map extends Component {
    state = {
        authorized: false,
        longitude: -49.6451598,
        latitude: -27.2108001,
        coordinates: [],
        error: ""
    };

    async componentDidMount() {
        MapboxGL.setAccessToken(
            "pk.eyJ1IjoiZmVybmFuZG9wYXNjb2FsIiwiYSI6ImNqdjlwcjRwazE0ZW80M3FwNTk1bjF6Y2gifQ.RqfNioOVkzNLNuKTPDnNow"
        );
    }

    getCurrentLocation = () => {
        isAuthorized().then(authorized => {
            if (authorized) {
                RNLocation.getLatestLocation({ timeout: 60000 }).then(
                    latestLocation => {
                        this.setState({
                            longitude: latestLocation.longitude,
                            latitude: latestLocation.latitude
                        });
                    }
                );
            } else {
                getAuthorization();
            }
        });
    };

    handlerOnLongPressMap = ({ coordinates }) => {
        console.tron.log(coordinates);
        this.props.changeFormState(coordinates);
    };

    render() {
        const { users } = this.props;
        const { longitude, latitude } = this.state;
        return (
            <MapContainer>
                <ButtonLocation onPress={() => this.getCurrentLocation()}>
                    <Icon name="location-arrow" size={40} color="#fff" />
                </ButtonLocation>
                <MapboxGL.MapView
                    centerCoordinate={[longitude, latitude]}
                    style={{ flex: 1 }}
                    styleURL={MapboxGL.StyleURL.Dark}
                    onLongPress={({ geometry }) =>
                        this.handlerOnLongPressMap(geometry)
                    }
                    zoomLevel={14}
                >
                    <MapboxGL.PointAnnotation
                        id={"local"}
                        key={"local"}
                        coordinate={[longitude, latitude]}
                    >
                        <LocationContainer>
                            <LocationBlack />
                        </LocationContainer>
                        <MapboxGL.Callout title={"Você"} />
                    </MapboxGL.PointAnnotation>

                    {users.map(user => (
                        <MapboxGL.PointAnnotation
                            id={`${user.id}`}
                            key={`${user.id}`}
                            coordinate={user.coordinates}
                        >
                            <LocationContainer>
                                <LocationAvatar
                                    source={{ uri: user.avatar_url }}
                                />
                            </LocationContainer>
                            <MapboxGL.Callout title={user.login} />
                        </MapboxGL.PointAnnotation>
                    ))}
                </MapboxGL.MapView>
            </MapContainer>
        );
    }
}

mapStateToProps = state => ({
    users: state.users.data
});

mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);
