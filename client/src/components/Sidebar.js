import React from 'react';
import {NavLink} from 'react-router-dom';
import profile from '../images/profile.png'
import wallet from '../images/wallet.png'
import portfolio from '../images/portfolio.png'
import watchlist from '../images/watchlist.png'
import inbox from '../images/inbox.png'
import notes from '../images/notes.png'
import more from '../images/more.png'

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-row bg-transparent border-gray-200 px-0 sm:px-0 py-2.5 rounded relative w-1/6 ">
			
			<aside class="w-full h-full  " aria-label="Sidebar">
				<div class=" py-0 px-0  rounded shadow-lg  items-center">
					<ul class="space-y-2  ">
						<li
							class="border-gray-400 flex flex-col bg-black  shadow-lg rounded-lg container items-left">
							<NavLink to="/myprofile"
								className="flex items-center p-2  \ text-white  dark:text-white-900 hover:bg-white-900 text-4xl ">
								<img class="w-9 h-9 text-white transition duration-75  group-hover:text-grey-900 "
									src={profile} alt=""/>
								<span class="ml-5">Profile</span>
							</NavLink>
						</li>
						<li
							class="border-gray-400 bg-black flex flex-col  shadow-lg rounded-lg container items-left">
							<NavLink to="/wallet"
								className="flex items-center p-2 \ text-white  dark:text-white-900 hover:bg-white-900 text-4xl ">
								<img class="w-9 h-9 text-white transition duration-75  group-hover:text-gray-900 "
									src={wallet} />
								<span class="ml-5">Wallet</span>
							</NavLink>
						</li>
						<li
							class="border-gray-400 bg-black flex flex-col  shadow-lg rounded-lg container items-left">
							<NavLink to="/portfolio"
								className="flex items-center p-2 \ text-white  dark:text-white-900 hover:bg-white-900 text-4xl ">
								<img class="w-9 h-9 text-white transition duration-75  group-hover:text-gray-900 "
									src={portfolio} />
								<span class="ml-5">Portfolio</span>
							</NavLink>
						</li>
						
						<li
							class="border-gray-400 bg-black  shadow-lg rounded-lg flex flex-col conatiner items-left">
							<a href="#"
								class="flex items-center p-2   text-white  dark:text-white-900 hover:bg-gray-900 text-4xl ">
								<img class="w-9 h-9 text-white transition duration-75  group-hover:text-gray-900 "
									src={watchlist} />
								<span class="ml-5">Watchlist</span>
							</a>
						</li>
						<li
							class="border-gray-400 bg-black  shadow-lg rounded-lg flex flex-col container items-left">
							<a href="#"
								class="flex items-center p-2   text-white  dark:text-white-900 hover:bg-gray-900 text-4xl ">
								<img class="w-9 h-9 text-white transition duration-75  group-hover:text-gray-900 "
									src={inbox} />
								<span class="ml-5">Inbox</span>
							</a>
						</li>
						<li
							class="border-gray-400 bg-black  shadow-lg rounded-lg flex flex-col container items-left">
							<a href="#"
								class="flex items-center p-2   text-white  dark:text-white-900 hover:bg-gray-900 text-4xl ">
								<img class="w-9 h-9 text-white transition duration-75  group-hover:text-gray-900 "
									src={notes} />
								<span class="ml-5">Notes</span>
							</a>
						</li>
						<li
							class="border-gray-400 bg-black  shadow-lg rounded-lg flex flex-col container items-left hover:bg-gray-900">
							<a href="#"
								class="flex items-center p-2   text-white  dark:text-white-900  text-4xl ">
								<img class="w-9 h-9 text-white transition duration-75  group-hover:text-gray-900 "
									src={more} alt=""/>
								<span class="ml-5">More</span>
							</a>
						</li>



					</ul>
				</div>
			</aside>
		</div>
        </>
    )
}

export default Sidebar;