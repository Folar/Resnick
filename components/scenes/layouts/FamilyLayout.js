import React from 'react';
import {
    View,
    Text,
    asset,
    Image
} from 'react-vr';

import ButtonClickable from './elements/ButtonClickable.js';
//Layout
class FamilyLayout extends React.Component {

    constructor(props) {
        super(props);
        choiceThis = this;
        this.state = {
            cursor: 0,
            familyData: {

                title: "Hillel & Ida Resnik",
                story: ["Hillel was a blacksmith before he was drafted into the russian army" +
                " After five years in the Russian army, Hillel went to work for Grandpa Yidell Susman," +
                "who owned a large blacksmith shop in Smolovich that employed twenty men. The blacksmith shop fabricated " +
                "straw cutting machines, ploughs, horseshoes, and other farm implements. " +
                "\nIda was the oldest daughter of of Grandpa Sussman and fell in love with Hillel." +
                " Grandpa Yidell objected, since it was customary for the parents to choose a spouse for thier child" +
                ", love was never heard of. After the marriage,\n Grandpa Yidell's dowry was a blacksmith shop" +
                " fifty miles away from Smolovich as punishment for her disobedience.\n" +
                "Kratzevich was a farmming comunity that only had one other jewish family besides us." +
                "The other Jewish family made their living selling liquor and renting rooms to passing vistors." +
                " The other thirty gentile families lived on farms and made their living cutting timber. ",
                    "Everyone was born in Kratzevich. Minnie at the age of twenty left for America in 1910.Fannie and Morris" +
                    " followed in 1912. After Willie's birth in 1913, Ida insited on going to America.  Hillel sold everyting " +
                    "he owned in Kratzevich and left for America with Ralph, Rose and Jack in 1914. The rest of the siblings stayed in Smolovich " +
                    "with Ida until Willie got older. The siblings that stayed with Ida in Smolovich, her place of birth, were Florence, Julius, " +
                    "Ruby, Goldie and Willie.\nGrandma Susssman had one big house and two smaller houses. Uncle Avroham , Ida's oldest " +
                    "brother now owned Yidell's blacksmith shop. Avroham also owned the second biggest house in Smolovich." +
                    "blacksmith shop was under contract by the russian army to produce horseshoes.World war I began in 1914 and we lived in " +
                    "Smolovich until 1919.\nThe war between Russia and Poland ended in 1919. The new border between these countries divided Hillel's  " +
                    "birthplace which was west of Minsk and east of Molowitz. Because Russia wasn't recognized by by America, we claimed Polish " +
                    "Citizenship and moved to Radoskoviz in 1919. Ida and the six children  stayed with uncle Yakov, who was a tailor.",
                    "\nRalph married Mary Goldstien in 1920. Everyone first moved to Mary's uncle in Warsaw, where the American consul was. " +
                    "After a few months we moved to Falenitz 20 miles away from Warsaw. All but Ruby lived in Falenitz until we came to America in 1923." +
                    " Ruby stayed in Warsaw for the last 5 months waiting for the passports to arrive from America. We all came to America in " +
                    "October 1923.\nThanks to Minnie and Fanny for all the information about our origin.\n-Rubin Resnick 1986"]
            }

        };

    }

    componentDidMount() {

    }

    next() {

        this.setState({cursor: this.state.cursor + 1});
    }

    prev() {
        this.setState({cursor: this.state.cursor - 1});
    }

    getColor(t) {
        if (t == "p" && this.state.cursor == 0 || t == "n" && this.state.cursor == 2)
            return "white";
        return "black";
    }

    getBackgroundColor(t) {
        if (t == "p" && this.state.cursor == 0 || t == "n" && this.state.cursor == 2)
            return "white";
        return "gray";
    }

    render() {


        let checkDim = {height: .12, width: .36, valueFont: .06, dieFont: .09, marginRight: .08};


        return (
            <View
                style={{
                    opacity: .75

                }}>

                <View style={{
                    height: 3,
                    width: 3.6,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    layoutOrigin: [.5, .35],
                    transform: [
                        {translateX: 0},
                        {translateZ: -5}]
                }}>
                    <Text
                        style={{
                            backgroundColor: "white",
                            color: 'black',
                            fontSize: 0.2,
                            fontWeight: '300',
                            layoutOrigin: [0, 0],
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{translate: [0, 0, 0]}],
                        }}>
                        {this.state.familyData.title}
                    </Text>

                    <Text
                        style={{
                            backgroundColor: "white",
                            color: 'black',
                            fontSize: 0.1,
                            height: 2,
                            fontWeight: '350',
                            layoutOrigin: [0, -.05],
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'left',
                            textAlignVertical: 'center',
                            transform: [{translate: [0, 0, 0]}],
                        }}>
                        {this.state.familyData.story[this.state.cursor]}
                    </Text>
                    <View style={{
                        height: 3,
                        width: 3.6,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        layoutOrigin: [0, .51],
                        transform: [
                            {translateX: 0},
                            {translateZ: 0}]
                    }}>
                        <ButtonClickable value="Prev" dim={checkDim}
                                         color={this.getColor("p")}
                                         backgroundColor={this.getBackgroundColor("p")}
                                         clickable={this.state.cursor != 0}
                                         action={this.prev.bind(this)}/>
                        <ButtonClickable value="Next" dim={checkDim}
                                         color={this.getColor("n")}
                                         backgroundColor={this.getBackgroundColor("n")}
                                         clickable={this.state.cursor != 2}
                                         action={this.next.bind(this)}/>
                    </View>
                    <Image
                        style={{
                            width: .7,
                            height: .7,
                            layoutOrigin: [0,3.9],
                            transform: [
                                {translateX: 0},
                                {translateZ: 3.8}]
                        }}
                        source={asset("resnickmap.jpg")}
                    >
                    </Image>
                </View>


            </View>



        )
    }
}

module
    .exports = FamilyLayout;
