export const Learn = (props) => {
  return (
    <div id='Learn' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h4>Contact IBM</h4>
          <h4>Privacy </h4>
          <h4>Terms of use</h4>
          <h4>Accessibility</h4>
          <h4>Cookie Preferences</h4>



        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                  {' '}
                  <img src={d.img} alt='...' className='team-img' />
                  <div className='caption'>
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div >
  )
}
