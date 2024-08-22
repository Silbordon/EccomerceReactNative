import { Image, Pressable, StyleSheet, View, ScrollView, Text } from "react-native";
import { colors } from "../global/colors";

const Banner = () => {
  return (
    <View style={styles.containerBanner}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
      <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/Slider-1Banner.webp")}
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            <Text style={[styles.text, { color: colors.green900 }]}>The Best for your pet</Text>
            <Pressable
              onPress={() => console.log("Ver más")}
              style={({ pressed }) => [
                styles.button,
                {
                  opacity: pressed ? 0.9 : 1,
                },
              ]}
            >
              <Text style={styles.buttonText}>Shop Now!</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/banner4-cat.webp")}
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            <Text style={styles.text}>Indestructive Toys</Text>
            <Pressable
              onPress={() => console.log("Ver más")}
              style={({ pressed }) => [
                styles.button,
                {
                  opacity: pressed ? 0.9 : 1,
                },
              ]}
            >
              <Text style={styles.buttonText}>Shop Now!</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/banner2.webp")}
            resizeMode="conver"
          />
          <View style={styles.overlay}>
            <Text style={[styles.text, { color: colors.purple }]}>Pets Supplies!</Text>
            <Pressable
              onPress={() => console.log("Ver más")}
              style={({ pressed }) => [
                styles.button,
                {
                  opacity: pressed ? 0.9 : 1,
                },
              ]}
            >
              <Text style={styles.buttonText}>Shop Now!</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  containerBanner: {
    marginHorizontal: 1,
    marginBottom: 10
  },
  scrollView: {
    flexDirection: 'row',
  },
  imageContainer: {
    height: 400,
    width: 380,
    marginRight: 10,
    borderRadius: 18,
    shadowColor: colors.grayNatural,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    backgroundColor: colors.gray100,
    elevation: 9,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: 400,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: "Barlow-SemiBold",
    marginBottom: 30
  },
  button: {
    backgroundColor: colors.orange,
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: "Barlow-Bold"
  },
});
