import {DiveLevel} from "@/lib/homepage/map";

export const diveLevelLabels: Record<DiveLevel, string> = {
    [DiveLevel.BEGINNER]: "Beginner",
    [DiveLevel.INTERMEDIATE]: "Intermediate",
    [DiveLevel.ADVANCED]: "Advanced",
};

export const diveRatings = [1, 2, 3, 4, 5] as const;

export const diveRatingLabels: Record<string, string> = {
    "1": "Very Bad",
    "2": "Bad",
    "3": "Average",
    "4": "Good",
    "5": "Excellent",
};
