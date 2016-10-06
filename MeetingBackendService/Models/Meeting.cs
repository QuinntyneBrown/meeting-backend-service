using System;

namespace MeetingBackendService.Models
{
    public class Meeting
    {
        public int Id { get; set; }
        public int? AppId { get; set; }
        public App App { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Angenda { get; set; }
        public string Minutes { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }
    }
}
