import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, View, SafeAreaView } from 'react-native';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import AddBtn_CP from './screens/AddBtn_CP';
import AddBtn_DV from './screens/AddBtn_DV';
import AddBtn_NN from './screens/AddBtn_NN';
import AddBtn_NNL from './screens/AddBtn_NNL';
import AddBtn_TD from './screens/AddBtn_TD';
import AddBtn_TN from './screens/AddBtn_TN';
const DEFAULT_TOGGLE_SIZE = 40;
const ACTIONS = { 
  ASK: 'AddBtn_CP', 
  RECOMMEND: 'RECOMMEND', 
  SAVE_PLACE: 'SAVE_PLACE', 
  INVITE_FRIEND: 'INVITE_FRIEND'
};

const ACTIONS_SHEET = [
    {
        "action": ACTIONS.ASK,
        "title": 'Ask',
        "index": 0
    },
    {
        "action": ACTIONS.RECOMMEND,
        "title": 'Recommend',
        "index": 1
    },
    {
        "action": ACTIONS.SAVE_PLACE,
        "title": 'Add a favorite place',
        "index": 2
    },
    {
        "action": ACTIONS.INVITE_FRIEND,
        "title": 'Invite friends',
        "index": 3
    },
    {
        "action": "CANCEL",
        "title": 'Cancel',
        "index": 4
    },
];

const CANCEL_BUTTON_INDEX = 4;

class ActionButtonToggle extends Component {

    togglePressed = () => {
        this.showActionSheet()
    };

    showActionSheet = () => {
        this.ActionSheet.show()
    }

    renderActions = () => {
        return (
            <ActionSheet
                ref={o => this.ActionSheet = o}
                options={ACTIONS_SHEET.map(x => x.title)}
                cancelButtonIndex={CANCEL_BUTTON_INDEX}
                styles={actionSheetStyle}
                tintColor={'#393e33'}
                onPress={(index) => {
                    if (index === 0) {
                        
                        this.props.navigation.navigate('AddBtn_CP');
                    } else if (index === 1) {
                        this.props.navigation.navigate('Recommend');
                    } else if (index === 2) {
                        this.props.navigation.navigate('Search');
                    } else if (index === 3) {
                        this.props.navigation.navigate('InviteFriends');
                    } 
                }}
            />
        );

    };

    render() {
        const {
            icon,
            toggleColor,
            toggleSize
        } = this.props;

        return (
            <SafeAreaView
                pointerEvents="box-none"
                style={Styles.container}
            >
                <View style={Styles.actionsWrapper}>
                    {this.renderActions()}
                </View>

                <TouchableWithoutFeedback
                    onPress={this.togglePressed}
                >
                    <View style={[Styles.toggleButton, {
                        width: toggleSize,
                        height: toggleSize,
                        borderRadius: toggleSize / 2,
                        backgroundColor: toggleColor
                    }]}>
                        {icon}
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        );
    }
}

ActionButtonToggle.propTypes = {
    toggleColor: PropTypes.string,
    toggleSize: PropTypes.number,
    icon: PropTypes.node
};

ActionButtonToggle.defaultProps = {
    toggleColor: 'white',
    toggleSize: DEFAULT_TOGGLE_SIZE
};

const actionSheetStyle = {
    body: {
        flex: 1,
        alignSelf: 'flex-end',
        backgroundColor: 'transparent'
    },
    buttonBox: {
        width: '90%',
        height: 70,
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
}

const Styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toggleButton: {
        bottom: 4,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionsWrapper: {
        position: 'absolute',
        bottom: 0
    },
    actionContainer: {
        position: 'absolute'
    },
    actionContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};


export default ActionButtonToggle;  