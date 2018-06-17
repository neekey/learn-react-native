export const ADD_PLACE = 'ADD_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';

export function addPlace(placeName) {
  return {
    type: ADD_PLACE,
    payload: {
      placeName,
    },
  };
}

export function deletePlace(placeKey) {
  return {
    type: DELETE_PLACE,
    meta: {
      placeKey,
    },
  };
}
