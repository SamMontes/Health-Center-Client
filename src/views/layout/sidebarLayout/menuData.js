import {
  Bookmark,
  DragIndicator,
  Favorite,
  Note,
  Star,
} from '@mui/icons-material';

export const MENU_DATA = [
  {
    label: 'Agendar cita',
    pageLabel: 'Agendar cita',
    icon: DragIndicator,
    path: '/appointment',
  },
  {
    label: 'Historial médico',
    pageLabel: 'Historial médico',
    icon: (props) => (
      <Note {...props} className={`${props.className ?? ''} -rotate-90 `} />
    ),
    path: '/medical-history',
  },
  {
    label: 'Historial citas',
    pageLabel: 'Historial citas',
    icon: Bookmark,
    path: '/dating-history',
  },
  {
    label: 'Mis datos',
    pageLabel: 'Mis datos',
    icon: Star,
    path: '/user-profile',
  },
  {
    label: 'Médicos',
    pageLabel: 'Médicos',
    icon: Favorite,
    path: '/doctor-profile',
  },
];
