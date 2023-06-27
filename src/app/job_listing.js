import React from 'react'
import "./job_listing.css"
import { recentJobs } from './recentjobs'
console.log(recentJobs)

const JobListing = () => {
  return (
    <div>

      <nav>
        <div className='logo mt-1'>
          {/* To be replaced with the actual logo */}
          <p>Logo</p>
        </div>

        <div className='home'>
          <span>Home</span>
          <span className='ml-4'>Jobs</span>

        </div>

        <div className='profile-btn'>
          <button>Profile</button>
        </div>
      </nav>

      <section className='top-section'>
        <div className='find'>
          <p className='text-white mt-2'>Find your job</p>
        </div>

        <div className='controls mt-8'>
          <p className='job'>Job title or keyword <hr className='mb-5' /></p>
          <p className='location'>Location <hr /></p>
          <button className='search mt-0'>Search</button>
        </div>

      </section>

      <section className='sidebar cursor-pointer'>
        <p className='categories'>Categories</p>
        <div className='frontend'>

          <input type='radio'></input>
          <label className='ml-2 '>Frontend (150)</label>

        </div>

        <div className='specific'>
          <ul className='first'>
            <li><input type='checkbox'></input>
              <label className='ml-2'>React Js (39)</label></li>

            <li> <input type='checkbox'></input>
              <label className='ml-2'>Next Js (40)</label></li>

            <li><input type='checkbox'></input>
              <label className='ml-2'>Svelte (20)</label></li>

            <li> <input type='checkbox'></input>
              <label className='ml-2'>Angular (54)</label></li>

            <li><input type='checkbox'></input>
              <label className='ml-2'>Swift (54)</label></li>

            <li> <input type='checkbox'></input>
              <label className='ml-2'>JavaScript (105)</label></li>

            <li><input type='checkbox'></input>
              <label className='ml-2'>TypeScript (5)</label></li>

            <li><input type='checkbox'></input>
              <label className='ml-2'>Kotlin (3)</label></li>

            <li> <input type='checkbox'></input>
              <label className='ml-2'>Java (8)</label></li>

            <li><input type='checkbox'></input>
              <label className='ml-2'>Dart (3)</label></li>

            <li><input type='checkbox'></input>
              <label className='ml-2'>React Native (19)</label></li>

            <li> <input type='checkbox'></input>
              <label className='ml-2'>Flutter (7)</label></li>
          </ul>
        </div>
        <div className='types'>
          <ul>
            <li><input type='radio'></input>
              <label className='ml-2'>Backend (200)</label></li>
            <li><input type='radio'></input>
              <label className='ml-2'>Fullstack (80)</label></li>
            <li><input type='radio'></input>
              <label className='ml-2'>UI/UX (33)</label></li>
            <li><input type='radio'></input>
              <label className='ml-2'>Cloud (15)</label></li>
            <li> <input type='radio'></input>
              <label className='ml-2'>Blockchain(17)</label></li>
            <li><input type='radio'></input>
              <label className='ml-2'>Mobile (41)</label></li>
          </ul>

        </div>

        <div>
          <p className='level'>Job Level</p>
          <ul>
            <li><input type='checkbox'></input>
              <label className='ml-2'>Entry Level</label></li>
            <li> <input type='checkbox'></input>
              <label className='ml-2'>Mid Level</label></li>
            <li><input type='checkbox'></input>
              <label className='ml-2'>Senior Level</label></li>
          </ul>

        </div>

        <div>
          <p className='jobtype'>On-Site/Remote</p>
          <ul>
            <li><input type='checkbox'></input>
              <label className='ml-2'>Remote</label></li>
            <li><input type='checkbox'></input>
              <label className='ml-2'>Hybrid</label></li>
            <li> <input type='checkbox'></input>
              <label className='ml-2'>On-Site</label></li>
          </ul>

        </div>
      </section>

      <section className='center'>
        <div>
          <div className='center-titles'>
            <h5 className='font-base'>All Jobs</h5>
            <p>Sort by</p>
          </div>

          <div className='grid-container p-3'>

            {recentJobs.map((card, i) => (
              <div key={i} className='grids flex' >
                
                <div className='flex items-center'>
                  <img src={card.image} alt='Images' />
                  {/* <p> Images </p> */}
                </div>
                <div className='ml-7 mt-3'>
                  <p className='text-base'>{card.title}</p>
                  <p className='text-base'>{card.location}</p>
                  <div>
                    <span className='language'>{card.tags[0]}</span>
                    <span className='framework'>{card.tags[1]}</span>
                  </div>
                  
                </div>
                </div>
              
            ))}


            <div className='grids flex'>
              <div className='flex items-center'>
                {/* <img {recentJobs[0].image}  alt="logo"/> */}
                <p className='font-semibold ml-3'>Andela</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>{recentJobs[0].title}</p>
                <p className='text-base'>{recentJobs[0].location}</p>
                <div>
                  <span className='language'>{recentJobs[0].tags[0]}</span>
                  <span className='framework'>{recentJobs[0].tags[1]}</span>
                </div>
              </div>
            </div>




            <div className='grids flex'>
              <div className='flex items-center'>
                <img src='./public/assets/andela.png' />
                <p className='font-semibold ml-3'>Andela</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>
            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Sanlam</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>
            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Andela</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>
            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Sanlam</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>
            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Andela</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>

            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Sanlam</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>
            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Sanlam</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>
            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Andela</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>
            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Andela</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>


            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Andela</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>
            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Sanlam</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>
            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Sanlam</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>
            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Andela</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>

            <div className='grids flex'>
              <div className='flex items-center'>
                {/* To be replaced with the actual logo */}
                <p className='font-semibold ml-3'>Sanlam</p>
              </div>
              <div className='ml-7 mt-3' >
                <p className='text-base'>Frontend Developer</p>
                <p className='text-base'>Mombasa, Kenya</p>
                <div>
                  <span className='language'>JavaScript</span>
                  <span className='framework'>Angular</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='pagination'>
        <a href='#'>&laquo;</a>
        <a href='#'>1</a>
        <a href='#'>2</a>
        <a href='#'>3</a>
        <a href='#'>&raquo;</a>
      </div>

      <section className='footer'>
        <div className='footer-content'>
          <p className='footer-title'>Moringa School</p>
          <p className='footer-location'>Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya</p>
          <div className='contact'>
            <p>+254 712 293 878 (Admin/General Enquiries)</p>
            <p>+254 741 493 5656 (Data Science)</p>
            <p>+254 712 293 878 (Whatsapp)</p>
            <p>contact@moringaschool.com</p>
            <p>admissions@moringaschool.com</p>
            <p> P.O Box 28860 - 00100, Nairobi </p>
          </div>
        </div>
      </section>

      <div className='last'>
        <p>2022 Moringa School, All Rights Reserved</p>
      </div>

    </div>


  )
}

export default JobListing