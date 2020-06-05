using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PetQuiz.Models
{
    public class QnA
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Question { get; set; }
        [Required]
        public string CorrectAnswer { get; set; }
        [Required]
        public string WrongAnswerOne { get; set; }
        [Required]
        public string WrongAnswerTwo { get; set; }
    }
}
