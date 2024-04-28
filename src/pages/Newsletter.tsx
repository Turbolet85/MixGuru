const Newsletter = () => {
  return (
    <form className={'form'}>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>our Newsletter</h4>
      <div className="form-row">
        <label htmlFor={'name'} className={'form-label'}>
          name
        </label>
        <input
          type={'text'}
          className={'form-input'}
          name={'name'}
          id={'name'}
          defaultValue={'Anton'}
        />
      </div>
    </form>
  );
};

export default Newsletter;
