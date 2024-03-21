import Property from "@/components/Property";
import properties from "@/properties.json";
const PropertiesPage = () => {
	return (
		<section className="px-4 py-6">
			<div className="container-xl lg:container m-auto px-4 py-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{properties.map((property) => (
						<Property
							baths={property.baths}
							beds={property.beds}
							imgSrc={property.images[0]}
							location={property.location.city}
							name={property.name}
							price={property.rates.weekly}
							propertyType={property.type}
							rates={property.rates}
							sqft={property.square_feet}
							key={property._id}
							id={property._id}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
export default PropertiesPage;
