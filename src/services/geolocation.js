import RNLocation from "react-native-location";
import { Alert, BackHandler } from "react-native";
import AndroidOpenSettings from "react-native-android-open-settings";

isAuthorized().then(authorized => {
    if (!authorized) askAuthorization();
});

export async function askAuthorization() {
    Alert.alert(
        "Ação necessária",
        "Autorizar a geolocalização",
        [
            {
                text: "Sair",
                onPress: () => {
                    return BackHandler.exitApp();
                },
                style: "cancel"
            },
            {
                text: "Quero autorizar",
                onPress: () => {
                    return getAuthorization();
                }
            },
            {
                text: "Ir para configurações",
                onPress: () => {
                    AndroidOpenSettings.locationSourceSettings();
                }
            }
        ],
        { cancelable: false }
    );
}

export async function getAuthorization() {
    const granted = await RNLocation.requestPermission({
        ios: "whenInUse",
        android: { detail: "coarse" }
    }).then(granted => {
        return granted;
    });
    return granted;
}

export async function isAuthorized() {
    const granted = await RNLocation.checkPermission({
        ios: "whenInUse",
        android: { detail: "coarse" }
    }).then(granted => granted);
    return granted;
}

export default RNLocation;
