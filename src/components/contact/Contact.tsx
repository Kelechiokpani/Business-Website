import React from "react";
import {z} from "zod";
import {useFormik} from 'formik'
import {toFormikValidationSchema} from 'zod-formik-adapter'


const ContactSchema = z.object({
	firstName: z.string().min(8, {message: 'minimum of 4 characters are required'}),
	lastName: z.string().min(8, {message: 'minimum of 4 characters are required'}),
	email: z.string().email({message: 'Invalid email address'}),
	comment: z.string().min(8, {message: 'minimum of 10 characters are required'}),
})

const ContactForm: React.FC = () => {

	const formik = useFormik({
		validationSchema: toFormikValidationSchema(ContactSchema),
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			comment: ''
		},
		onSubmit: values => {
			console.log(values)
			// AddComments({
			//     variables: {
			//         firstName: values.firstName,
			//         lastName: values.lastName,
			//         email: values.email,
			//         comment: values.comment
			//     }
			// })
			//     .then(({ data }:any) => {
			//         console.log(data)
			//     })
			//     .catch(() => {
			//     })
		}
	})

	return (
		<div className="relative">
			<div className="relative bg-opacity-75 bg-deep-purple-accent-700">
				<svg
					className="absolute inset-x-0 bottom-0 text-white"
					viewBox="0 0 1160 163"
				>
					<path
						fill="currentColor"
						d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
					/>
				</svg>
				<div
					className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="flex flex-col items-center justify-between xl:flex-row">

						<div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
							<h2
								className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
								<br className="hidden md:block"/>
								What Our Clients Say
							</h2>
							<p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
								Though the project is still ongoing, internal stakeholders are pleased
								with Deep technologies progress so far, noting their attentiveness, reliability, and professionalism.
								The team is knowledgeable and willing to provide feedback and expertise in order to advance the product.
							</p>

							<br/>
							<br/>

							<p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
								The number of power users, a KPI, increased by 15% during Deep tech work.
								Families who use the app have liked their changes.
								Deep tech team succeeds in their tasks because of their structured, communicative, and well-rounded
								team.
							</p>

						</div>


						<div className="w-full max-w-xl xl:px-3 xl:w-5/12">
							<div className="bg-white rounded shadow-2xl p-10 sm:p-10">
								<h3 className="mb-4 text-xl font-semibold  sm:mb-6 sm:text-4xl text-purple-800">
									Contact Me
								</h3>
								{/*{({ errors, touched }:any) => (*/}
								<div>
									<div className="mb-1 sm:mb-2">
										<label
											htmlFor="firstName"
											className="inline-block mb-1 font-medium text-purple-800"
										>
											First name
										</label>
										<input
											placeholder="Andrew"
											type="text"
											className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-400 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
											id="firstName"
											name="firstName"
											value={formik.values.firstName}
											onChange={formik.handleChange}
										/>
										{/*{errors.firstName && touched.firstName ? (*/}

										{/*    <div>{errors.firstName}</div>*/}

										{/*) : null}*/}
									</div>

									<div className="mb-1 sm:mb-2">
										<label
											htmlFor="lastName"
											className="inline-block mb-1 font-medium text-purple-800"
										>
											Last name
										</label>
										<input
											placeholder="Philips"
											type="text"
											className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-400 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
											id="lastName"
											name="lastName"
											value={formik.values.lastName}
											onChange={formik.handleChange}
										/>
										{/*{errors.lastName && touched.lastName ? (*/}

										{/*    <div>{errors.lastName}</div>*/}

										{/*) : null}*/}
									</div>

									<div className="mb-1 sm:mb-2">
										<label
											htmlFor="email"
											className="inline-block mb-1 font-medium text-purple-800"
										>
											E-mail
										</label>
										<input
											placeholder="AndrewPhilips@verydeeptech.com"
											type="text"
											className=" flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-400 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
											id="email"
											name="email"
											value={formik.values.email}
											onChange={formik.handleChange}
										/>
										{/*{errors.email && touched.email ? (*/}

										{/*    <div>{errors.email}</div>*/}

										{/*) : null}*/}
									</div>


									<div className="mb-1 sm:mb-2">
										<label
											htmlFor="email"
											className="inline-block mb-1 font-medium text-purple-800"
										>
											inquiry
										</label>
										<textarea
											placeholder="Some texts"
											id="comment"
											name="comment"
											className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-400 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline">
                                        </textarea>
										{/*{errors.comment && touched.comment ? (*/}

										{/*    <div>{errors.comment}</div>*/}

										{/*) : null}*/}
									</div>

									<div className="mt-4 mb-2 sm:mb-4">
										<button
											type="submit"
											onClick={() => formik.handleSubmit()}
											className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-900 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
										>
											Submit
										</button>
									</div>
									{/*<p className="text-xs text-purple-800 sm:text-sm">*/}
									{/*    We respect your privacy. Unsubscribe at any time.*/}
									{/*</p>*/}
								</div>
								{/*)}*/}

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm
