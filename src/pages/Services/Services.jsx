import React, { useEffect, useState } from "react";
import { Input, Select, Card } from "antd";
import { Helmet } from "react-helmet-async";
// import Search from "antd/es/transfer/search";

const Services = () => {
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredServices, setFilteredServices] = useState([]);
  console.log(filteredServices)


console.log(filter)
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    if(filter === 'all'){
        setFilteredServices(services)
    } else {
      const filtered = services.filter((service) =>
        service.name.toLowerCase().includes(filter.toLowerCase())
      );
      console.log(filtered)
      setFilteredServices(filtered);
    }
  },[services,filter])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
        <Helmet>
            <title>Service</title>
        </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-center">Visa Services</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
       <input onChange={(e) => setFilter(e.target.value)} placeholder="Search" className="w-full border border-gray-300 p-1 px-3 rounded-[10px]" type="search" name="" id="" />

        <Select
          //   value={select}
          onChange={(value) => setFilter(value)}
            defaultValue="all"
          className="w-full md:w-48"
          size="large"
        >
          <Select.Option value="all">All</Select.Option>
          <Select.Option value="tourist">Tourist</Select.Option>
          <Select.Option value="student">Student</Select.Option>
          <Select.Option value="work">Work</Select.Option>
        </Select>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <Card
              key={service.id}
              title={service.name}
                variant="outlined"
              className="shadow-lg rounded-xl hover:shadow-2xl transition duration-300"
            >
              <p className="text-gray-600">{service.description}</p>
              <p className="mt-3 text-sm text-gray-500">
                ⏱ Processing Time:{" "}
                <span className="font-medium">{service.processingTime}</span>
              </p>
            </Card>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No services found
          </p>
        )}
      </div>
    </div>
  );
};

export default Services;
