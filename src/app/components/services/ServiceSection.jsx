import React from "react"
import { servicesData } from "@/app/data/services"
import ServiceItem from "./ServiceItem"

function ServiceSection() {
  return (
    <>
      {servicesData.map((item, index) => (
        <ServiceItem
          key={index}
          item={item}
          index={index}
        />
      ))}
    </>
  )
}

export default ServiceSection
