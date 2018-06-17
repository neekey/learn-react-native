import { ADD_PLACE, DELETE_PLACE } from '../actions/places';
import placeImage from '../../assets/example_img.jpg';

const images = [
  placeImage,
  { uri: 'https://www.billboard.com/files/media/Christina-Aguilera-press-photo-02-billboard-1548.jpg' },
];

const initialState = {
  places: [],
};

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [...state.places, {
          key: String(Math.random()),
          name: action.payload.placeName,
          image: images[Math.random() >= 0.5 ? 0 : 1],
        }],
      };
      break;
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(item => item.key !== action.meta.placeKey),
      };
      break;
    default:
      return state;
  }
}
