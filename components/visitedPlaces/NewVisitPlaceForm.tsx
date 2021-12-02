import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewVisitPlaceForm.module.css';

const NewVisitPlaceForm = (props: any) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();

    const enteredTitle = titleInputRef?.current?.value;
    const enteredImage = imageInputRef?.current?.value;
    const enteredAddress = addressInputRef?.current?.value;
    const enteredDescription = descriptionInputRef?.current?.value;

    const visitPlaceData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddVisitPlace(visitPlaceData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Place Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Place Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Place</button>
        </div>
      </form>
    </Card>
  );
}

export default NewVisitPlaceForm;
