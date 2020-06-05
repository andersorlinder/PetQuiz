using Microsoft.EntityFrameworkCore;
using PetQuiz.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetQuiz.Data
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QnA>().HasData(
               new QnA
               {
                    Id = 1,
                    Question = "Vad kallas ett husdjurs pappa?",
                    CorrectAnswer = "Husse",
                    WrongAnswerOne = "Matte",
                    WrongAnswerTwo = "Knatte"
               },
               new QnA
               {
                   Id = 2,
                   Question = "Vilken är Sveriges vanligaste hundras?",
                   CorrectAnswer = "Labrador",
                   WrongAnswerOne = "Schäfer",
                   WrongAnswerTwo = "Golden Retriver"
               },
               new QnA
               {
                   Id = 3,
                   Question = "Vilken är sveriges vanligaste kattras?",
                   CorrectAnswer = "Ragdoll",
                   WrongAnswerOne = "Perser",
                   WrongAnswerTwo = "Norsk Skogskatt"
               },
               new QnA
               {
                   Id = 4,
                   Question = "Hur mycket vägde världens tyngsta hund?",
                   CorrectAnswer = "162 kg",
                   WrongAnswerOne = "118 kg",
                   WrongAnswerTwo = "95 kg"
               },
               new QnA
               {
                   Id = 5,
                   Question = "Varför blev marsvinet domesticerat?",
                   CorrectAnswer = "För mat",
                   WrongAnswerOne = "Sällskapsdjur",
                   WrongAnswerTwo = "Arbetsdjur"
               },
               new QnA
               {
                   Id = 6,
                   Question = "Vad betyder namnet marsvin?",
                   CorrectAnswer = "Liten havsgris",
                   WrongAnswerOne = "Elakt svin",
                   WrongAnswerTwo = "Årgångsvin"
               },
               new QnA
               {
                   Id = 7,
                   Question = "Vilken talföljd har skapats av kaniners förökande?",
                   CorrectAnswer = "Fibonacci",
                   WrongAnswerOne = "Primtalen",
                   WrongAnswerTwo = "Exponentiell"
               },
               new QnA
               {
                   Id = 8,
                   Question = "Vilken underfamilj kommer hamstern ifrån?",
                   CorrectAnswer = "Sork",
                   WrongAnswerOne = "Råtta",
                   WrongAnswerTwo = "Katt"
               },
               new QnA
               {
                   Id = 9,
                   Question = "Hur mycket väger en genomsnittlig tamråtta?",
                   CorrectAnswer = "700 g",
                   WrongAnswerOne = "1200 g",
                   WrongAnswerTwo = "300 g"
               },
               new QnA
               {
                   Id = 10,
                   Question = "Vad är det vanligaste namnet på en honkatt?",
                   CorrectAnswer = "Doris",
                   WrongAnswerOne = "Osofin",
                   WrongAnswerTwo = "Siri"
               },
               new QnA
               {
                   Id = 11,
                   Question = "Vilket djur är hyenor närmast besläktade med?",
                   CorrectAnswer = "Kattdjur",
                   WrongAnswerOne = "Hunddjur",
                   WrongAnswerTwo = "Svin"
               },
               new QnA
               {
                   Id = 12,
                   Question = "Vad är en orientalisk korthår?",
                   CorrectAnswer = "En katt",
                   WrongAnswerOne = "En häst",
                   WrongAnswerTwo = "En kanin"
               });
        }
    }
}
