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
      const { name, location, image } = action.payload;
      return {
        ...state,
        places: [...state.places, {
          key: String(Math.random()),
          name,
          location,
          image,
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
