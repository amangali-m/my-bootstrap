import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
          <div className='col mb-3'>
            <a className=''>
              <img src='img/logo.png' className='bi me-2' width={50} height={50}></img>
            </a>
            <p>Дом мебели Матрешка</p>
          </div>
          <div className='col mb-3'>

                      </div>
                    <div className='col mb-4'>
                        <h5>Наши контакты</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Адреса магазинов</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Пункты самовывоза</a>
                          </li>
                        </ul>
                    </div>
        </footer>
    </div>
  )
}

export default Footer