import { GET_KIDS, ADD_KID, ADD_ACTIVITIES } from "../actions/kids.action";

const initialState = [];

export default function kidsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_KIDS:
      return action.payload;
    case ADD_KID:
      return [...state, action.payload];
    case ADD_ACTIVITIES:
      return [...state, action.payload];
    default:
      return state;
  }
}

/* kidsReducer: [
    {
      id: 'Gabriel',
      Activities: {
        '-Mn0h-6I2rx8-hzfoU00': {
          activity: 'test',
          dateRange: [
            {
              endDate: '2021-11-03T13:22:38.745Z',
              key: 'selection',
              startDate: '2021-10-27T12:22:38.745Z'
            }
          ],
          description: 'louvain',
          postTime: 1635337372250
        },
        '-Mn0okd9aDd9sGFbwM7t': {
          activity: 'Foot',
          dateRange: [
            {
              endDate: '2021-11-03T13:56:35.397Z',
              key: 'selection',
              startDate: '2021-10-27T12:56:35.397Z'
            }
          ],
          description: 'new',
          postTime: 1635339406117
        }
      },
      Date_of_Birth: '2011-07-24',
      Lastname: 'Cardon',
      Sex: 'boy',
      pictures: {
        '-MmgewncIJc-RoabH_Sg': {
          comment: 'Jejddjfnfnhdjskj',
          fichier: '180D3358-334A-4FB7-88BE-EF5DB773FFD3.jpeg',
          postTime: 1634984487000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kids-project-4a512.appspot.com/o/images%2F5BVogdDIFparj1bagWbc65dI37t2%2F180D3358-334A-4FB7-88BE-EF5DB773FFD3.jpeg?alt=media&token=7a4b9eaf-4ec7-460e-b157-8cb9d84c44df'
        },
        '-MmxJfdn0jLfB5r5MOzI': {
          comment: 'Hello,',
          fichier: 'B062190B-5A95-45FC-BF51-3078DFA42B9D.jpeg',
          postTime: 1634967392000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kids-project-4a512.appspot.com/o/images%2F5BVogdDIFparj1bagWbc65dI37t2%2FB062190B-5A95-45FC-BF51-3078DFA42B9D.jpeg?alt=media&token=903bf0fd-b031-4f62-bc4b-7a23fcb3c8d2'
        },
        '-MmxKFqAUkUWCM_TwU3t': {
          comment: 'Photo de Gab 1 an',
          fichier: 'IMG_0731.JPG',
          postTime: 1427903615000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kids-project-4a512.appspot.com/o/images%2F5BVogdDIFparj1bagWbc65dI37t2%2FIMG_0731.JPG?alt=media&token=3e161c1a-601a-49ae-a692-4daf5cd9ab6e'
        }
      }
    },
    {
      id: 'Henry',
      Date_of_Birth: '2021-10-06',
      Lastname: 'Carette',
      Sex: 'boy'
    },
    {
      id: 'Jan',
      Date_of_Birth: '2021-10-14',
      Lastname: 'Barry ',
      Sex: 'boy'
    },
    {
      id: 'Jean',
      Date_of_Birth: '2021-10-15',
      Lastname: 'Cardon',
      Sex: 'boy'
    },
    {
      id: 'Théoline',
      Activities: {
        '-Mn0VSATV-0DrajgKie4': {
          activity: 'danse',
          dateRange: [
            {
              endDate: '2021-11-03T12:27:56.722Z',
              key: 'selection',
              startDate: '2021-10-27T11:27:56.722Z'
            }
          ],
          description: '',
          postTime: 1635334083251
        }
      },
      Date_of_Birth: '2011-10-26',
      Lastname: 'Cardon',
      Sex: 'girl',
      pictures: {
        '-Mn294XEdkxoZm8vHlKI': {
          comment: 'Retour classe de montagne ! ',
          fichier: '9C2C0694-5FAB-4E61-97E1-B30A469242DB.jpeg',
          postTime: 1634967447000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kids-project-4a512.appspot.com/o/images%2F5BVogdDIFparj1bagWbc65dI37t2%2F9C2C0694-5FAB-4E61-97E1-B30A469242DB.jpeg?alt=media&token=7b51aa7c-06c7-47fe-80ea-417e5270991f'
        },
        '-Mn29YtNnelW1avdQSsm': {
          comment: 'Départ classe de montagne ! ',
          fichier: '2576286E-7F0B-4234-87DF-E05DDF679761.jpeg',
          postTime: 1635361873000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kids-project-4a512.appspot.com/o/images%2F5BVogdDIFparj1bagWbc65dI37t2%2F2576286E-7F0B-4234-87DF-E05DDF679761.jpeg?alt=media&token=176064ed-3071-4f1c-a0ad-3b27b0488d59'
        },
        '-Mn2BPpHIVSztlGn0Kyz': {
          comment: 'Anniversaire Théo 10 ans ! ',
          fichier: 'C4A7CA52-14E5-4194-AEC4-9980BF7092B4.jpeg',
          postTime: 1635268981000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kids-project-4a512.appspot.com/o/images%2F5BVogdDIFparj1bagWbc65dI37t2%2FC4A7CA52-14E5-4194-AEC4-9980BF7092B4.jpeg?alt=media&token=5585f5dd-bd02-4a76-aca0-1c78c388421e'
        },
        '-Mn2DY4myiEVM0Uo1Xfw': {
          comment: 'Theoline en Suisse ',
          fichier: 'F3916EB8-99F1-4865-8A12-1FC3D5649EA9.jpeg',
          postTime: 1634723221000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kids-project-4a512.appspot.com/o/images%2F5BVogdDIFparj1bagWbc65dI37t2%2FF3916EB8-99F1-4865-8A12-1FC3D5649EA9.jpeg?alt=media&token=612b370e-29a3-48f1-9e21-3bb2892a2df0'
        },
        '-Mn2DvYInyn6T3iwt7az': {
          comment: 'Walibi avec son frère 😍',
          fichier: 'FD642E92-8F71-4B2E-87F1-3635B6A9C2EC.jpeg',
          postTime: 1635363009000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kids-project-4a512.appspot.com/o/images%2F5BVogdDIFparj1bagWbc65dI37t2%2FFD642E92-8F71-4B2E-87F1-3635B6A9C2EC.jpeg?alt=media&token=bff7acbd-12b5-4908-8505-95fa595b9c88'
        },
        '-Mn2Et5T0yUUZz6dKplp': {
          comment: 'Au barrage Mauvoisin',
          fichier: '7E1B652A-3B16-46ED-B4A5-3EE1DE7DEEAB.jpeg',
          postTime: 1634753696000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kids-project-4a512.appspot.com/o/images%2F5BVogdDIFparj1bagWbc65dI37t2%2F7E1B652A-3B16-46ED-B4A5-3EE1DE7DEEAB.jpeg?alt=media&token=80439e08-44fc-4e98-8515-61a1faef3088'
        },
        '-Mn2FpSqQc6Jh2Y4atwW': {
          comment: 'Frère et sœur 😜',
          fichier: 'A82672BC-0C8D-4ED1-AB44-EE7D12C84840.jpeg',
          postTime: 1634723219000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kids-project-4a512.appspot.com/o/images%2F5BVogdDIFparj1bagWbc65dI37t2%2FA82672BC-0C8D-4ED1-AB44-EE7D12C84840.jpeg?alt=media&token=96edc8ff-3df5-46fd-a837-d61fa6a12b47'
        }
      }
    }
  ], 
 */
