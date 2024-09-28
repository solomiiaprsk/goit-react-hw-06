const initialState = {
    profiles: [],
    showProfilesList: true,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "profile/add": {
            return {
                ...state,
                profiles: [...state.profiles, action.payload]
            }
        }
        case "profile/delete": {
            return {
                ...state,
                profiles: state.profiles.filter(profile => profile.id !== action.payload),

            }
        }
        case "profile/showProfileList": {
            return {
                ...state,
                showProfilesList: action.payload
            }
        }
        default:
            return state;
    }


};






export const addProfile = (payload) => {
    return {
        type: "profile/add",
        payload: payload,
    }
};

export const deleteProfile = (profileId) => {
    return {
        type: "profile/delete",
        payload: profileId,
    }
};

export const showProfileList = (payload) => {
    return {
        type: "profile/showProfileList",
        payload
    }
};
