import Image from "next/image";
import Link from "next/link";
import {
	FaBed,
	FaBath,
	FaRulerCombined,
	FaMoneyBill,
	FaMapMarker,
} from "react-icons/fa";

const Property = ({
	imgSrc,
	propertyType,
	name,
	price,
	rates,
	location,
	beds,
	baths,
	sqft,
	id,
}) => {
	const ratesArr = Object.keys(rates);
	return (
		<div className="rounded-xl shadow-md relative">
			<Image
				src={`/images/properties/${imgSrc}`}
				alt={name}
				sizes="100vw"
				width={0}
				height={0}
				className="w-full h-auto rounded-t-xl"
			/>
			<div className="p-4">
				<div className="text-left md:text-center lg:text-left mb-6">
					<div className="text-gray-600">{propertyType}</div>
					<h3 className="text-xl font-bold">{name}</h3>
				</div>
				<h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
					${price}/mo
				</h3>

				<div className="flex justify-center gap-4 text-gray-500 mb-4">
					<p className="flex gap-2 items-center">
						<FaBed /> {beds}
						<span className="md:hidden lg:inline">Beds</span>
					</p>
					<p className="flex gap-2 items-center">
						<FaBath /> {baths}
						<span className="md:hidden lg:inline">Baths</span>
					</p>
					<p className="flex gap-2 items-center">
						<FaRulerCombined />
						{sqft} <span className="md:hidden lg:inline">sqft</span>
					</p>
				</div>

				<div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
					<p className="flex items-center gap-2">
						<FaMoneyBill /> {ratesArr[0]}
					</p>
					<p className="flex items-center gap-2">
						<FaMoneyBill /> {ratesArr[1]}
					</p>
				</div>

				<div className="border border-gray-100 mb-5"></div>

				<div className="flex flex-col lg:flex-row justify-between mb-4">
					<div className="flex align-middle gap-2 mb-4 lg:mb-0">
						<FaMapMarker className="text-orange-700" />
						<span className="text-orange-700">{location} </span>
					</div>
					<Link
						href={`/properties/${id}`}
						className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Property;
