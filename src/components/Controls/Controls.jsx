import PropTypes from 'prop-types';
import { ControlWrapper } from './Controls.styled';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

export const Controls = ({ id, onDeleteContact, onEditContact }) => {
  return (
    <ControlWrapper>
      <IconButton
        type="button"
        size="large"
        color="primary"
        aria-label="edit"
        onClick={onEditContact}
      >
        <EditIcon />
      </IconButton>

      <IconButton
        type="button"
        size="large"
        color="primary"
        aria-label="delete"
        onClick={() => onDeleteContact(id)}
      >
        <DeleteIcon />
      </IconButton>
    </ControlWrapper>
  );
};

export const ControlsSave = ({ id, onDeleteContact }) => {
  return (
    <ControlWrapper>
      <IconButton type="submit" size="large" color="primary" aria-label="save">
        <SaveIcon />
      </IconButton>
      <IconButton
        type="button"
        size="large"
        color="primary"
        aria-label="delete"
        onClick={() => onDeleteContact(id)}
      >
        <DeleteIcon />
      </IconButton>
    </ControlWrapper>
  );
};

Controls.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func.isRequired,
};

ControlsSave.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
