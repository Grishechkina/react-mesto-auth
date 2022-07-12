import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const avatarRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    onClose()
  }
  function onClose() {
    avatarRef.current.value = ''
    props.onClose()
  }
  return (
    <PopupWithForm
      popupHeader="Обновить аватар"
      popupName="edit-avatar-pop-up"
      formName="avatar-edit-form"
      isOpen={props.isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <label className="form__field">
        <input type="url" id="ava-link" name="link" placeholder="Ссылка на аву"
          className="form__input" required ref={avatarRef} />
        <span className="link-input-error form__input-error" />
      </label>
    </PopupWithForm>
  )
}
export default EditAvatarPopup