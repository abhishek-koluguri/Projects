class RodCutter
    def get_optimal_cuts(length, prices) 
        case
        when length <= 0
            { "revenue" => 0, "cuts" => [[]] }
        else
            (1...length).inject({ "revenue" => (prices[length] || 0), "cuts" => [[length]] }) { 
                |solution, split| combine_two_solutions(solution, get_optimal_cuts_for_split(split, length, prices)) 
            }
        end
    end  

    def combine_two_solutions(firstStruct, secondStruct)
        case 
        when firstStruct["revenue"] > secondStruct["revenue"]
            firstStruct
        when firstStruct["revenue"] < secondStruct["revenue"]
            secondStruct
        else
            { "revenue" => firstStruct["revenue"], "cuts" => (firstStruct["cuts"] + secondStruct["cuts"]).uniq }
        end
    end

    def get_optimal_cuts_for_split(split, length, prices)
        firstSplit = get_optimal_cuts(split, prices)
        secondSplit = get_optimal_cuts(length - split, prices)

        { "revenue" => (firstSplit["revenue"] + secondSplit["revenue"]), "cuts" => firstSplit["cuts"].flat_map {
                |first| secondSplit["cuts"].map { |second| (first + second).sort }
            }.uniq
        }
    end
end