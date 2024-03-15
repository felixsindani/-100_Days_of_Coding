"use strict";
/**
 * Create an interface named farmer_data_interface
 */

//parent interface
interface farmer_data_interface {
    farmers_name: string
    farm_name: string | number
    location: string
    address?: any
    tel: number
    KTBH: boolean
    Langstroth: boolean
    size_of_land: number | string 

}
/**
 * child interface that inherit properties from parent interface
 * parent extends to child
 * extend key-word is used
 * syntax for extending more interfaces
 * interface new extends interface1, interface2, interface3
 */
interface Apiary extends farmer_data_interface{
    readonly Hive_name: string;
    /* readonly property: variable can't be reassigned another value/type */
    Hive_type: string
    Date_of_installation: number | string
    Date_of_occupy: number | string
    First_harvest?: number | string
    /* ? makes property optional in objects that use the interface */
    
}

const Hive_01: Apiary = {
    farmers_name: 'Alex',
    farm_name: 'Fari_Ecofarm',
    location: 'Kitale',
    tel: 723342849,
    KTBH: true,
    Langstroth: true,
    size_of_land: 1,
    Hive_name: 'KTBH_01',
    Hive_type: 'KTBH',
    Date_of_installation: 25/6/2023,
    Date_of_occupy: 3/7/2023,
};

const Hive_02: Apiary = {
    farmers_name: 'Alex',
    farm_name: 'Fari_Ecofarm',
    location: 'Kitale',
    tel: 723342849,
    KTBH: true,
    Langstroth: true,
    size_of_land: 1,
    Hive_name: 'LS_01',
    Hive_type: 'Langstroth',
    Date_of_installation: 25/6/2023,
    Date_of_occupy: 8/7/2023,
};


const Hive_List: Apiary[] = [Hive_01, Hive_02];

console.log(Hive_01.Hive_name);
console.log(Hive_01.Hive_type);
console.log(Hive_01.Date_of_installation);
console.log(Hive_01.Date_of_occupy);

console.log(Hive_02.Hive_name);
console.log(Hive_02.Hive_type);
console.log(Hive_02.Date_of_installation);
console.log(Hive_02.Date_of_occupy);


